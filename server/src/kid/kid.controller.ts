import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { KidService } from './kid.service';
import { CreateKidDto } from './dto/create-kid.dto';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Kid')
@UseInterceptors(LoggingInterceptor)
@Controller('api/v1/kid')
export class KidController {
  constructor(private readonly kidService: KidService) {}

  @Get()
  async getKids() {
    return await this.kidService.getKids();
  }

  @Post()
  async createKid(@Body() createKidDto: CreateKidDto) {
    return await this.kidService.createKid(createKidDto);
  }
}
