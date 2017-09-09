import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IMission,
  IUserMission,
  TMissionHash,
  AppState,
  IAddMissionRequest,
  IUser,
  ParentComponent
} from '../../shared/models/barrel-models';
import { communication_constant, mission_status } from '../../shared/constants/barrel-constants';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of'

import { MissionsService } from '../missions.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-view-missions',
  templateUrl: './view-missions.component.html',
  styleUrls: ['./view-missions.component.scss']
})
export class ViewMissionsComponent extends ParentComponent implements OnInit {

  missions: IUserMission[];

  constructor(private store: Store<AppState>,
              private toast: ToastService,
  						private missionsService: MissionsService) {
    super();
  }

  ngOnInit() {
    const myUser: Observable<IUser> = this.store.select('user').filter(user => user != null);
    const missions: Observable<TMissionHash> =
      this.store.select('missions').filter(missions => missions != null);

    Observable.combineLatest(myUser, missions).subscribe((res) => {
      const user: IUser = res[0];
      const missionHash: TMissionHash = res[1];
      
      this.missions = 
      Object.keys(missionHash)
        .map(key => missionHash[key])
        .map((mission: IMission) => { return {...mission, status: mission_status.toDo} })
        .filter((mission: IUserMission) =>
          user.userMissions.filter(userMission => userMission.id == mission.id).length == 0);

     }, (err) => console.error('bla', err));
  }

  addMission(mission: IUserMission): void {
  	this.missionsService.addMission(<IAddMissionRequest>{
  		idMission: mission.id,
  		requestType: communication_constant.addMission
  	})
  	.then(res => {
      // Also set this mission as unclickable
      mission.status = mission_status.inProgress;
      this.toast.openSnackBar(res, '')
    })
    .catch(err => this.toast.openSnackBar(err, ''));
  }

  userAlreadyInMission(mission): boolean {
    return true;
  }

}
