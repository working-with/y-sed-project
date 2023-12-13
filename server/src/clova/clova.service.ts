import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { VoiceType } from 'src/voice/dto/voice.dto';

@Injectable()
export class ClovaService {
  private readonly clovaConfig;

  constructor(private readonly configService: ConfigService) {
    this.clovaConfig = {
      clovaUrl: this.configService.get<string>('CLOVA_REQUEST_URL'),
      clientId: this.configService.get<string>('CLOVA_CLIENT_ID'),
      cliendtSecret: this.configService.get<string>('CLOVA_CLIENT_SECRET'),
    };
  }

  async getClovaTTS(voiceType: VoiceType, text: string) {
    const clovaUrl = `${this.clovaConfig.clovaUrl}`;
    const data = {
      speaker: voiceType,
      text: text,
      format: 'mp3',
    };
    const response = await axios.post(clovaUrl, data, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-NCP-APIGW-API-KEY-ID': this.clovaConfig.clientId,
        'X-NCP-APIGW-API-KEY': this.clovaConfig.cliendtSecret,
      },
      responseType: 'stream',
    });
    return response;
  }
}
