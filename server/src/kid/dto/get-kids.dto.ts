import { ApiProperty } from '@nestjs/swagger';
import { CommonResponse } from './common.dto';
import { Kid } from '../schema/kid.schema';

export class getKidsResponse extends CommonResponse {
  @ApiProperty()
  data?: Partial<Array<Kid>>;
}
