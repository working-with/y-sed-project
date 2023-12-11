import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ImageDto } from './image.dto';
import { Gender } from '../../kid/dto/answer.dto';

export class ExperimentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty()
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @ApiProperty()
  image: Array<ImageDto>;
}
