import { Module } from '@nestjs/common';
import { ExperimentService } from './experiment.service';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { ExperimentController } from './experiment.controller';
import { LogService } from 'src/util/logger';

@Module({
  imports: [FirebaseModule],
  controllers: [ExperimentController],
  providers: [ExperimentService, LogService],
})
export class ExperimentModule {}
