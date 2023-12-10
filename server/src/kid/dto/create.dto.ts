import { ApiProperty, PickType } from '@nestjs/swagger';
import { CommonResponse } from './common.dto';
import { Kid } from '../schema/kid.schema';

export class CreateKidDto extends PickType(Kid, ['code', 'name', 'gender']) {}

export class CreateKidResponseDto extends CommonResponse {
  @ApiProperty()
  kidId?: string;
}
