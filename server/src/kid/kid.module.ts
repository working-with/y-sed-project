import { Module } from '@nestjs/common';
import { KidService } from './kid.service';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { KidController } from './kid.controller';
import { LogService } from 'src/util/logger';

@Module({
  imports: [FirebaseModule],
  controllers: [KidController],
  providers: [KidService, LogService],
})
export class KidModule {}
