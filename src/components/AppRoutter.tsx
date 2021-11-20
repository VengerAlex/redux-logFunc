import {FC} from "react";

import {publicRoutes, privateRoutes, RouteNames} from "../routes";
import {Redirect, Route, Switch} from "react-router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRoutter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)

    return (
        <>
            {isAuth
                ?
                <Switch>
                    {privateRoutes.map(el => <Route
                        key={el.path}
                        path={el.path}
                        component={el.component}/>)}
                    <Redirect to={RouteNames.EVENT} />
                </Switch>
                :
                <Switch>
                    {publicRoutes.map(el => <Route
                        key={el.path}
                        path={el.path}
                        component={el.component}/>)}
                    <Redirect to={RouteNames.LOGIN} />
                </Switch>}
        </>

    );
};

export default AppRoutter;