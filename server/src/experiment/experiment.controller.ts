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
import { getExperimentsResponse, getTestScriptsResponse } from './dto/get.dto';

@ApiTags('Experiment')
@UseInterceptors(LoggingInterceptor)
@Controller('api/v1/experiment')
export class ExperimentController {
  constructor(private readonly experimentService: ExperimentService) {}

  @ApiQuery({
    name: 'gender',
    required: false,
    example: 1,
  })
  @ApiQuery({
    name: 'code',
    required: false,
    example: '01',
  })
  @Get()
  async getExperimentsByCode(
    @Query('gender', new ParseIntPipe({ optional: true })) gender?: Gender,
    @Query('code') code?: string,
  ): Promise<getExperimentsResponse> {
    return await this.experimentService.getExperiments(+gender, code);
  }

  @ApiQuery({
    name: 'code',
    required: false,
    example: '01',
  })
  @Get('script')
  async getTestScripts(
    @Query('code') code: string,
  ): Promise<getTestScriptsResponse> {
    return await this.experimentService.getTestScripts(code);
  }
}
