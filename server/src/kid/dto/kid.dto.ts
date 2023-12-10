import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { AnswerDto } from './answer.dto';
// import { ExperimentDto } from 'src/experiment/dto/experiment.dto';

export enum Gender {
  F = 0,
  M = 1,
}

export class KidDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  // @ApiProperty()
  // experiment: Array<ExperimentDto>;

  // @ApiProperty()
  // answer: Array<AnswerDto>;
}
