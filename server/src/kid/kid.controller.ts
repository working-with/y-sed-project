import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { KidService } from './kid.service';
import { CreateKidDto, CreateKidResponseDto } from './dto/create.dto';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { ApiTags } from '@nestjs/swagger';
import { getKidResponse, getKidsResponse } from './dto/get.dto';

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
}
