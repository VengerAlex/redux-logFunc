import React, {FC} from 'react';
import {Layout, Row} from "antd";
import LoginForm from "../../components/LoginForm";

const Login: FC = () => {
    return (
        <Layout>
           <Row className="h100" justify="center" align="middle">
                <LoginForm />
           </Row>
        </Layout>
    );
};

export default Login;