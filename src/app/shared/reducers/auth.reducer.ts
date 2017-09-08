import * as Auth from '../actions/auth.actions';
import { IAuthUser, ActionImplementation } from '../models/barrel-models';

export function authReducer(state: IAuthUser = null, action: ActionImplementation) {
	switch (action.type) {
		case Auth.AuthChange.type:
			return action.payload;

		default:
			return state;
	}
}