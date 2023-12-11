import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ExperimentService } from './experiment.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { Gender } from 'src/kid/dto/kid.dto';

@ApiTags('Experiment')
@UseInterceptors(LoggingInterceptor)
@Controller('api/v1/experiment')
export class ExperimentController {
  constructor(private readonly experimentService: ExperimentService) {}

  @ApiQuery({
    name: 'code',
    required: false,
    description: 'experiment Code like 01, 02 ,...',
    example: '01',
  })
  @ApiQuery({
    name: 'gender',
    required: false,
    example: 1,
  })
  @Get()
  async getExperimentsByCode(
    @Query('code') code?: string,
    @Query('gender', new ParseIntPipe({ optional: true })) gender?: Gender,
  ) {
    return await this.experimentService.getExperiments(code, gender);
  }
}
