import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { FirebaseService } from 'src/firebase/firebase.service';
import { LogService } from 'src/util/logger';
import { CreateKidDto, CreateKidResponseDto } from './dto/create.dto';
import { getKidResponse, getKidsResponse } from './dto/get.dto';
import { UpdateKidSurveyDto, updateKidAnswerResponse } from './dto/update.dto';

@Injectable()
export class KidService {
  private readonly firestore;

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly logService: LogService,
  ) {
    this.firestore = firebaseService.getFirestoreInstance();
  }

  async getKids(): Promise<getKidsResponse> {
    const response = [];
    try {
      const documents = await this.getCollection('kids');
      documents.forEach((doc) => {
        response.push({ id: doc.id, ...doc.data() });
      });
      const kids = response.sort((a, b) => a.code - b.code);

      this.logService.verbose('Success to get kids', 'KidService.getKids()');

      return {
        statusCode: HttpStatus.OK,
        message: 'Success to get kids',
        data: kids,
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

  async createKid(createKidDto: CreateKidDto): Promise<CreateKidResponseDto> {
    try {
      const docRef = await addDoc(collection(this.firestore, 'kids'), {
        ...createKidDto,
        createdAt: new Date(),
      });
      this.logService.verbose(
        `Document written with ID: ${docRef.id}`,
        'KidService.createKid()',
      );
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Success to create kid',
        kidId: docRef.id,
      };
    } catch (error) {
      console.error('Error adding document: ', error);
      if (error instanceof HttpException) {
        return {
          statusCode: error.getStatus(),
          message: error.message,
          error: error.stack,
        };
      }
    }
  }

  async getKid(kidId: string): Promise<getKidResponse> {
    const response = [];
    try {
      const documents = await this.getCollection('kids');
      documents.forEach((doc) => {
        if (doc.id === kidId) {
          response.push({ id: doc.id, ...doc.data() });
          return;
        }
      });
      if (response.length === 0) {
        throw new HttpException('Not found kid', HttpStatus.NOT_FOUND);
      }
      this.logService.verbose(
        `Success to get kid - id: ${kidId}`,
        'KidService.getKid()',
      );
      return {
        statusCode: HttpStatus.OK,
        message: 'Success to get kids',
        data: response[0],
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

  async updateKidSurvey(
    kidId: string,
    updateKidSurvey: UpdateKidSurveyDto,
  ): Promise<updateKidAnswerResponse> {
    try {
      const { survey } = updateKidSurvey;
      const kidRef = doc(this.firestore, 'kids', kidId);
      await updateDoc(kidRef, {
        survey,
      });
      this.logService.verbose(
        `Document written with ID: ${kidRef.id}`,
        'KidService.updateKidSurvey()',
      );
      return {
        statusCode: HttpStatus.OK,
        message: 'Success to update kid survey',
        kidId: kidRef.id,
      };
    } catch (error) {
      console.error('Error updating document: ', error);
      if (error instanceof HttpException) {
        return {
          statusCode: error.getStatus(),
          message: error.message,
          error: error.stack,
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
