import React, {FC, useEffect} from 'react';

import AppRoutter from "./components/AppRoutter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";
import {IUser} from "./modules/IUser";

const App:FC = () => {
    const {setUser, setIsAuth} = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, [])

    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRoutter />
            </Layout.Content>
        </Layout>
    );
};

export default App;