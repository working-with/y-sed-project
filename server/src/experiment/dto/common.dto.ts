import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class CommonResponse {
  @ApiProperty()
  statusCode?: HttpStatus;

  @ApiProperty()
  message?: string;

  @ApiProperty()
  error?: string;
}
