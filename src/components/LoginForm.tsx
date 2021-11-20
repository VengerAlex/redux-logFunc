import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import users from '../../public/users.json'
import {useDispatch} from "react-redux";
import {AuthActioCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";


const LoginForm: FC = () => {
    const {user} = useTypedSelector(state => state.authReducer)
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(AuthActioCreators.login('admin', '123'))
    }

    return (
        <Form onFinish={submit}>
            <Form.Item
                label="User Name"
                name="username"
                rules={[rules.required('Please input your username')]}
            >
                <Input value={user.username}/>
            </Form.Item>
            <Form.Item
                label="Username"
                name="password"
                rules={[rules.required('Please input your password')]}
            >
                <Input value={user.password}/>
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    type="primary">Log In</Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;