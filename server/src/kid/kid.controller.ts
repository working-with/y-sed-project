import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { KidService } from './kid.service';
import { CreateKidDto, CreateKidResponseDto } from './dto/create.dto';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { getKidResponse, getKidsResponse } from './dto/get.dto';
import {
  UpdateKidSurveyDto as UpdateKidSurveyDto,
  updateKidAnswerResponse,
} from './dto/update.dto';

@ApiTags('Kid')
@UseInterceptors(LoggingInterceptor)
@Controller('api/v1/kid')
export class KidController {
  constructor(private readonly kidService: KidService) {}

  @Get()
  async getKids(): Promise<getKidsResponse> {
    return await this.kidService.getKids();
  }

  @Post()
  async createKid(
    @Body() createKidDto: CreateKidDto,
  ): Promise<CreateKidResponseDto> {
    return await this.kidService.createKid(createKidDto);
  }

  @Get(':kidId')
  async getKid(@Param('kidId') kidId: string): Promise<getKidResponse> {
    return await this.kidService.getKid(kidId);
  }

  @ApiBody({
    type: UpdateKidSurveyDto,
    description: 'X: 0, O: 1 / scale: 1 ~ 4',
    examples: {
      'example-1': {
        value: {
          survey: [
            {
              '1-1': {
                booleanAnswer: 1,
                scaleAnswer: 3,
              },
            },
            {
              '1-2': {
                booleanAnswer: 0,
                scaleAnswer: null,
              },
            },
          ],
        },
      },
    },
  })
  @Patch(':kidId')
  async updateKidAnswer(
    @Param('kidId') kidId: string,
    @Body() updateKidSurvey: UpdateKidSurveyDto,
  ): Promise<updateKidAnswerResponse> {
    return await this.kidService.updateKidSurvey(kidId, updateKidSurvey);
  }
}
