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
import { UpdateKidAnswerDto, updateKidAnswerResponse } from './dto/update.dto';

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
    type: UpdateKidAnswerDto,
    description: 'X: 0, O: 1 / scale: 1 ~ 4',
    examples: {
      'kid answer ex-1 ("X"를 입력했을 떄)': {
        value: { answer: [0, null, 0, null] },
      },
      'kid answer ex-2 ("O"를 입력했을 떄)': {
        value: { answer: [1, 2, 1, 1] },
      },
    },
  })
  @Patch(':kidId')
  async updateKidAnswer(
    @Param('kidId') kidId: string,
    @Body() updateKidAnswer: UpdateKidAnswerDto,
  ): Promise<updateKidAnswerResponse> {
    return await this.kidService.updateKidAnswer(kidId, updateKidAnswer);
  }
}
