import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
	IRequest,
	IResponse,
	ILoginRequest,
} from '../models/communication.model';
import { communication_constant } from '../constants/communication.constant';

// Communication Sources
import { FirebaseCommunicationService } from './firebase-communication.service';

@Injectable()
export class ServerCommunicationService {

  constructor(private firebaseComm: FirebaseCommunicationService) { }

  // I will use a facade to interact with server
  // In the future we might have different kid of server communications
  // like socket, api, ...
  // The goal here is to put everything under one function that handles it
  public request(request: IRequest): Promise<IResponse> {
  	switch (request.requestType) {

      // *********************************************
      // 
      //             AUTH
      // 
      // *********************************************

  		// LOGIN
  		case communication_constant.login:
      case communication_constant.register:
      case communication_constant.loginGoogle:
        return this.firebaseComm.loginRegister(<ILoginRequest>request);

      case communication_constant.logout:
        return this.firebaseComm.logout();

      // Init System
      case communication_constant.init:
        return this.firebaseComm.init();
        
  		default:
  			// code...
  			break;
  	}
  	return ;
  }

}
