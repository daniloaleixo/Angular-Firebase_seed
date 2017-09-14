import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ServerCommunicationService } from './server-communication.service';
import { communication_constant } from '../constants/communication.constant';

import { AppState, IResponse } from '../models/barrel-models';

@Injectable()
export class InitAppService {

  constructor(private server: ServerCommunicationService,
  						private store: Store<AppState>) {
    this.initSystem();
  }

  public initSystem(): void {
  	this.server.request({requestType: communication_constant.init})
  		.then((response: IResponse) => {
  		});
  }

}
