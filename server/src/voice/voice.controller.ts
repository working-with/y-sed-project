import { Body, Controller, Post, Res, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { VoiceRequestBody } from './dto/voice.dto';
import { VoiceService } from './voice.service';
import { Response } from 'express';

@ApiTags('Voice')
@UseInterceptors(LoggingInterceptor)
@Controller('api/v1/voice')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}

  @ApiBody({ type: VoiceRequestBody })
  @Post()
  async getVoiceScript(
    @Body() voiceBody: VoiceRequestBody,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.voiceService.getVoiceScript(voiceBody);
    response.setHeader('Content-Type', 'application/octet-stream');
    response.setHeader('Content-Disposition', 'attachment; filename=file.mp3');
    result.pipe(response);
  }
}
