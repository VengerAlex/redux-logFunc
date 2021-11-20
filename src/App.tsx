import React, {FC} from 'react';

import AppRoutter from "./components/AppRoutter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";

const App:FC = () => {
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