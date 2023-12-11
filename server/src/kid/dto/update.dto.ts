import { ApiProperty, PickType } from '@nestjs/swagger';
import { CommonResponse } from './common.dto';
import { KidDto } from './kid.dto';

export class UpdateKidAnswerDto extends PickType(KidDto, ['answer']) {}

export class updateKidAnswerResponse extends CommonResponse {
  @ApiProperty()
  kidId?: string;
}
