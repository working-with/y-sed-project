import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class TestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  question: Array<ScriptDto>;
}

export class ScriptDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  index: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  script: string;
}
