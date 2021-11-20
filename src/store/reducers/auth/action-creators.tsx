import {AuthActionEnum, ISetAuthAction, ISetError, ISetLoading, ISetUserAction} from "./types";
import {IUser} from "../../../modules/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActioCreators = {
    setUser: (user: IUser): ISetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): ISetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): ISetLoading => ({type: AuthActionEnum.SET_IS_LOADING, payload: payload}),
    setIsError: (error: string): ISetError => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActioCreators.setIsLoading(true))

            const {data} = await axios.get<IUser[]>('./users.json')
            const mockUser = data.find((user: IUser) => user.username === username && user.password === password);

            if(mockUser){
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username', mockUser.username)

                dispatch(AuthActioCreators.setIsAuth(true))
                dispatch(AuthActioCreators.setUser(mockUser))
            }else{
                dispatch(AuthActioCreators.setIsError('User was not found'))
            }

            dispatch(AuthActioCreators.setIsLoading(false))
        } catch (err){
            dispatch(AuthActioCreators.setIsError('Something went wrong'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {

        } catch (err){

        }
    },
}