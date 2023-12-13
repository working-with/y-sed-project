import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { LogService } from 'src/util/logger';
import { ClovaService } from 'src/clova/clova.service';
import { convertScript } from 'src/util/converter';
import { VoiceRequestBody } from 'src/voice/dto/voice.dto';
import { FirebaseService } from 'src/firebase/firebase.service';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

@Injectable()
export class VoiceService {
  private readonly storage;
  constructor(
    private readonly logService: LogService,
    private readonly clovaService: ClovaService,
    private readonly firebaseService: FirebaseService,
  ) {
    this.storage = firebaseService.getStorageInstance();
  }

  async getVoiceScript(voiceBody: VoiceRequestBody) {
    const { name, voiceType, script } = voiceBody;
    try {
      const text = convertScript(name, script);

      this.logService.verbose(
        `Success to get voice`,
        'voiceService.getVoiceScript()',
      );
      const res = await this.clovaService.getClovaTTS(voiceType, text);
      const converted = Buffer.from(res.data).toString('base64');
      return {
        statusCode: HttpStatus.OK,
        message: 'Success to get voice',
        data: converted,
      };
    } catch (error) {
      console.error('Error getting voices: ', error);
      if (error instanceof HttpException) {
        return {
          statusCode: error.getStatus(),
          message: error.message,
        };
      }
    }
  }

  async saveVoiceToStorage(data: any, voiceBody: VoiceRequestBody) {
    const { name, voiceType, script } = voiceBody;
    // const file = new Uint8Array(data);
    try {
      const storageRef = ref(this.storage, `voice/${name}-${script}`);

      await uploadString(storageRef, data);
      console.log('Uploaded a blob or file!', storageRef);
      const downloadURL = await getDownloadURL(storageRef);
      this.logService.verbose(
        `Success to save voice`,
        'voiceService.saveVoiceToStorage()',
      );
      return downloadURL;
    } catch (error) {
      console.error('Error saving voices: ', error);
      throw new InternalServerErrorException();
    }
  }
}
