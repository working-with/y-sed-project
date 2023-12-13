import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';

/**
1) 연수리 - 남자 아이 - 하준 (남성, 아동)
2) 연수리 - 여자 아이 - 다인 (여성, 아동)
3) 이야기 들려주는 부분(스토리) -  고은(여성, 청년) 
 */

export enum VoiceType {
  BOY = 'nhajun',
  GIRL = 'vdain',
  WOMAN = 'ngoeun',
}

export class VoiceRequestBody {
  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    description: 'nhajun(남아), vdain(여아), ngoeun(여성)',
  })
  @IsEnum(VoiceType)
  voiceType: VoiceType;

  @ApiProperty({
    required: true,
    example:
      '각 이야기 마다, [아동이름]이가 \n느낄 수 있는 다양한 마음이 있어.',
  })
  @IsString()
  script: string;
}
