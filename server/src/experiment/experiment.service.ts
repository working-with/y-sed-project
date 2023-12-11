import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FirebaseService } from 'src/firebase/firebase.service';
import { getExperimentsResponse } from './dto/get.dto';
import { LogService } from 'src/util/logger';
import { Gender } from 'src/kid/dto/kid.dto';

@Injectable()
export class ExperimentService {
  private readonly firestore;

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly logService: LogService,
  ) {
    this.firestore = firebaseService.getFirestoreInstance();
  }

  async getExperiments(
    code?: string,
    gender?: Gender,
  ): Promise<getExperimentsResponse> {
    const response = [];
    const data = [];
    try {
      const collectionRef = collection(this.firestore, 'experiments');
      if (code && gender === undefined) {
        console.log('code', code);
        const codeQuery = query(collectionRef, where('code', '==', code));
        const documents = await getDocs(codeQuery);
        documents.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } else if (code === undefined && gender) {
        console.log('gender', gender);
        const genderQuery = query(collectionRef, where('gender', '==', gender));
        const documents = await getDocs(genderQuery);
        documents.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } else if (gender && code) {
        console.log('code', code, gender);
        response.forEach((res) => {
          if (res['gender'] === +gender) {
            data.push(res);
          }
        });
      } else if (!(code || gender)) {
        console.log('gender', gender, code);
        const documents = await getDocs(collectionRef);
        documents.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      }
      this.logService.verbose(
        `Success to get experiments - code: ${code}, gender: ${gender}`,
        'ExperimentService.getExperiments()',
      );
      return {
        statusCode: HttpStatus.OK,
        message: 'Success to get experiments',
        data: response,
      };
    } catch (error) {
      console.error('Error getting documents: ', error);
      if (error instanceof HttpException) {
        return {
          statusCode: error.getStatus(),
          message: error.message,
        };
      }
    }
  }

  private async getCollection(collectionName: string) {
    try {
      const collectionRef = await getDocs(
        collection(this.firestore, collectionName),
      );
      return collectionRef;
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  }
}
