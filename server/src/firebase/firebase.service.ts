import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';

@Injectable()
export class FirebaseService {
  private readonly firebaseApp: FirebaseApp;
  private database: Firestore;
  private storage: FirebaseStorage;

  constructor(private readonly configService: ConfigService) {
    this.firebaseApp = initializeApp({
      apiKey: this.configService.get<string>('FIREBASE_API_KEY'),
      authDomain: this.configService.get<string>('FIREBASE_AUTH_DOMAIN'),
      projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
      storageBucket: this.configService.get<string>('FIREBASE_STORAGE_BUCKET'),
      messagingSenderId: this.configService.get<string>(
        'FIREBASE_STORAGE_BUCKET',
      ),
      appId: this.configService.get<string>('FIREBASE_API_KEY'),
    });
    this.database = getFirestore(this.firebaseApp);
    this.storage = getStorage(this.firebaseApp);
  }

  getFirestoreInstance(): Firestore {
    if (!this.database) {
      this.database = getFirestore(this.firebaseApp);
      return this.database;
    }
    return this.database;
  }

  getStorageInstance(): FirebaseStorage {
    if (!this.storage) {
      this.storage = getStorage(this.firebaseApp);
      return this.storage;
    }
    return this.storage;
  }
}
