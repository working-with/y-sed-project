import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { FirebaseService } from 'src/firebase/firebase.service';
import { LogService } from 'src/util/logger';
import { CreateKidDto } from './dto/create-kid.dto';

@Injectable()
export class KidService {
  private readonly firestore;

  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly logService: LogService,
  ) {
    this.firestore = firebaseService.getFirestoreInstance();
  }

  async getKids() {
    try {
      const kids = await this.getAll('kids');
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

  async createKid(createKidDto: CreateKidDto) {
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
        data: { kidId: docRef.id },
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

  private async getAll(collectionName: string) {
    const response = [];
    try {
      const querySnapshot = await getDocs(
        collection(this.firestore, collectionName),
      );
      querySnapshot.forEach((doc) => {
        response.push({ id: doc.id, ...doc.data() });
      });
      return response.sort((a, b) => a.code - b.code);
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  }
}
