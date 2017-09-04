import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ServerCommunicationService } from './server-communication.service';
import { communication_constant } from '../constants/communication.constant';

import { IInitResponse, AppState } from '../models/barrel-models';

import { GetMissions } from '../../missions/missions.actions';

@Injectable()
export class InitAppService {

  constructor(private server: ServerCommunicationService,
  						private store: Store<AppState>) {
  	// Get all the missions and put it in the store
  	this.server.request({requestType: communication_constant.init})
  		.then((response: IInitResponse) => 
			  this.store.dispatch(new GetMissions(response.missions)));
  }

}
