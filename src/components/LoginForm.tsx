import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import users from '../../public/users.json'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const userInfoValue = {username: '', password: ''}

const LoginForm: FC = () => {
    const [userValue, setUserValue] = useState(userInfoValue)

    const {error, isLoading, user} = useTypedSelector(state => state.authReducer)
    const {login} = useActions()

    const submit = () => {
        login(userValue.username, userValue.password)
    }

    const updateUserValue = (name: string, value: string) => {
        setUserValue(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }


    return (
        <Form onFinish={submit}>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                rules={[rules.required('Please input your username')]}
            >
                <Input
                    name="username"
                    placeholder='username'
                    onChange={(e) => updateUserValue(e.target.name, e.target.value)}
                    value={userValue.username}/>
            </Form.Item>
            <Form.Item
                rules={[rules.required('Please input your password')]}
            >
                <Input
                    name="password"
                    placeholder='password'
                    type={"password"}
                    onChange={(e) => updateUserValue(e.target.name, e.target.value)}
                    value={userValue.password}/>
            </Form.Item>
            <Form.Item>
                <Button
                    loading={isLoading}
                    htmlType="submit"
                    type="primary">Log In</Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;