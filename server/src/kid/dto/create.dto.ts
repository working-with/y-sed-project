import { ApiProperty, PickType } from '@nestjs/swagger';
import { CommonResponse } from './common.dto';
import { KidDto } from './kid.dto';

export class CreateKidDto extends PickType(KidDto, [
  'code',
  'name',
  'gender',
]) {}

export class CreateKidResponseDto extends CommonResponse {
  @ApiProperty()
  kidId?: string;
}
