import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
// import { ExperimentModule } from './experiment/experiment.module';
import { validationSchema } from './firebase/validation.schema';
import { KidModule } from './kid/kid.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
    // ExperimentModule,
    KidModule,
    FirebaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
