import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { VoiceRequestBody } from './dto/voice.dto';
import { VoiceService } from './voice.service';

@ApiTags('Voice')
@UseInterceptors(LoggingInterceptor)
@Controller('api/v1/voice')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}

  @ApiBody({ type: VoiceRequestBody })
  @Post()
  async getVoiceScript(@Body() voiceBody: VoiceRequestBody): Promise<any> {
    return await this.voiceService.getVoiceScript(voiceBody);
  }
}
