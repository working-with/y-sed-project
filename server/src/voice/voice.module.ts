import { Module } from '@nestjs/common';
import { ClovaService } from '../clova/clova.service';
import { VoiceController } from './voice.controller';
import { VoiceService } from './voice.service';
import { LogService } from 'src/util/logger';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  controllers: [VoiceController],
  providers: [VoiceService, LogService, ClovaService],
})
export class VoiceModule {}
