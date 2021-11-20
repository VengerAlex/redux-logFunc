import {AuthActionEnum, ISetAuthAction, ISetError, ISetLoading, ISetUserAction} from "./types";
import {IUser} from "../../../modules/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";

export const AuthActioCreators = {
    setUser: (user: IUser): ISetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): ISetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): ISetLoading => ({type: AuthActionEnum.SET_IS_LOADING, payload: payload}),
    setIsError: (error: string): ISetError => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActioCreators.setIsLoading(true))

            setTimeout(async () => {
                const response = await UserService.getUsers()
                const mockUser = response.data.find(user => user.username === username && user.password === password);

                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)

                    dispatch(AuthActioCreators.setUser(mockUser))
                    dispatch(AuthActioCreators.setIsAuth(true))
                } else {
                    dispatch(AuthActioCreators.setIsError('User was not found'))
                }
                dispatch(AuthActioCreators.setIsLoading(false))
            }, 1000)

        } catch (err) {
            dispatch(AuthActioCreators.setIsError('Something went wrong'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')

        dispatch(AuthActioCreators.setUser({} as IUser))
        dispatch(AuthActioCreators.setIsAuth(false))
    },
}