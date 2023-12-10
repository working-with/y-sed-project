import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNumber, IsNotEmpty } from 'class-validator';

export enum Gender {
  F = 0,
  M = 1,
}

export class AnswerDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty()
  @IsBoolean()
  booleanAnswer?: boolean; // O:0, X:1

  @ApiProperty()
  @IsNumber()
  scaleAnswer?: number; // 1~4
}
