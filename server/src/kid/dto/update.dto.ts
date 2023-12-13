import { ApiProperty, PickType } from '@nestjs/swagger';
import { CommonResponse } from './common.dto';
import { KidDto } from './kid.dto';

export class UpdateKidSurveyDto extends PickType(KidDto, ['survey']) {}

export class updateKidAnswerResponse extends CommonResponse {
  @ApiProperty()
  kidId?: string;
}
