import React, {FC} from 'react';

import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActioCreators} from "../store/reducers/auth/action-creators";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const {user, isAuth} = useTypedSelector(state => state.authReducer)
    const history = useHistory()
    const {logout} = useActions()


    const logOut = () => {
        logout()
    }

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{color: 'white'}}>{user.username}</div>
                        <Menu theme="dark" selectable={false}>
                            <Menu.Item
                                onClick={logOut}
                                key={1}>Logout
                            </Menu.Item>
                        </Menu>
                    </div>
                    :
                    <Menu theme="dark" selectable={false}>
                        <Menu.Item
                            onClick={() => history.push(RouteNames.LOGIN)}
                            key={1}>Login</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;