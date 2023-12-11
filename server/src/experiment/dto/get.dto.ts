import { ApiProperty } from '@nestjs/swagger';
import { CommonResponse } from './common.dto';
import { ExperimentDto } from './experiment.dto';
import { TestDto } from './test.dto';

export class getExperimentsResponse extends CommonResponse {
  @ApiProperty()
  data?: Partial<Array<ExperimentDto>>;
}

export class getTestScriptsResponse extends CommonResponse {
  @ApiProperty()
  data?: Partial<Array<TestDto>>;
}
