import { ApiProperty } from '@nestjs/swagger';
import { CommonResponse } from './common.dto';
import { KidDto } from './kid.dto';

export class getKidsResponse extends CommonResponse {
  @ApiProperty()
  data?: Partial<Array<KidDto>>;
}

export class getKidResponse extends CommonResponse {
  @ApiProperty()
  data?: Partial<KidDto>;
}
