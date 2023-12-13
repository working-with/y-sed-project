import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export enum Gender {
  F = 0,
  M = 1,
}

export class Survey {
  [index: string]: {
    booleanAnswer?: number;
    scaleAnswer?: number;
  };
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

  @ApiProperty()
  @IsOptional()
  survey?: Array<Survey>;
}
