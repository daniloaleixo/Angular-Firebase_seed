import { IAuthUser, ILayout } from './shared/models/barrel-models';

export interface AppState {
  auth: IAuthUser;
  layout: ILayout;
}