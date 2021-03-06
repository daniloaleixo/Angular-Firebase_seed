import { IAuthUser } from './auth.model';

export type TRequest = number;

export interface IRequest {
	requestType: TRequest;
}

export interface ILoginRequest extends IRequest {
	email: string;
	password: string;
}



export interface IResponse {

}

export interface ILoginResponse extends IResponse {
	user: IAuthUser;
}
