import {IUser} from "../../../modules/IUser";

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}



export interface ISetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}
export interface ISetError {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}
export interface ISetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}
export interface ISetLoading {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type AuthAction = ISetAuthAction | ISetError | ISetUserAction | ISetLoading