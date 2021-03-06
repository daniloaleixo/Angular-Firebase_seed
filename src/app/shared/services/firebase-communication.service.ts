import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// Firebase
import { AngularFireAuth,FirebaseAuthStateObservable } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from 'angularfire2/database';

// Model
import {
  ILoginRequest,
  IResponse,
  ILoginResponse
} from '../models/barrel-models';
import { communication_constant, errorMessages, sucessMessages } from '../constants/barrel-constants';
import { AppState } from '../../app.store';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class FirebaseCommunicationService {

  private databaseSnapshot: BehaviorSubject<any>;
  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private store: Store<AppState>) {
    this.databaseSnapshot = new BehaviorSubject<any>(null);
    this.databaseSnapshot.publishReplay(1);

    this.user = this.afAuth.authState;

    this.getDatabase();
  }


  // Get the whole DB
  private getDatabase(): void {
    this.db.object('/', { preserveSnapshot: true }).$ref
      .on('value', (snapshot) => {
        console.log('database snapshot', snapshot.val());
        this.databaseSnapshot.next(snapshot.val());
      });
  }

  public async init(): Promise<IResponse> {
    return {

    };
  }


  // Will login or register user either by email or by google
  public async loginRegister(request: ILoginRequest): Promise<ILoginResponse> {
  	const myResponse: ILoginResponse = {
  		user: null
  	};

    // Login
    if(request.requestType === communication_constant.login)
      myResponse.user = await this.afAuth.auth
        .signInWithEmailAndPassword(request.email, request.password);
    
    // Register
    if(request.requestType === communication_constant.register)
      myResponse.user = await this.afAuth.auth
        .createUserWithEmailAndPassword(request.email, request.password);

    // Login google
    if(request.requestType === communication_constant.loginGoogle){
      const result = await this.afAuth.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      myResponse.user = result.user;
    }

  	if(myResponse.user == null) 
      console.error('Não consegui fazer o login, deu algum erro');

  	return myResponse;
  }

  public logout(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
  	  this.afAuth.auth.signOut()
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }


}
