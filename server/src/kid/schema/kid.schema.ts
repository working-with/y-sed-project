import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

export enum Gender {
  F = 0,
  M = 1,
}

export class Kid {
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

  //   @ApiProperty()
  //   experiment: Array<Experiment>;

  //   @ApiProperty()
  //   answer: Array<Answer>;
}
