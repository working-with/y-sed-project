import { ApiProperty } from '@nestjs/swagger';
import { CommonResponse } from './common.dto';
import { ExperimentDto } from './experiment.dto';

export class getExperimentsResponse extends CommonResponse {
  @ApiProperty()
  data?: Partial<Array<ExperimentDto>>;
}
