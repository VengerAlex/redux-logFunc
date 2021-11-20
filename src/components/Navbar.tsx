import React, {FC} from 'react';

import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const history = useHistory()

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{color: 'white'}}>Venger</div>
                        <Menu theme="dark" selectable={false}>
                            <Menu.Item
                                onClick={() => console.log('logout')}
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