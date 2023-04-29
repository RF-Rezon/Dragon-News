import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderFirst from '../HeaderFirst/HeaderFirst';

const LogInRegister = () => {
    return (
        <div>
            <HeaderFirst/>
            <Outlet/>
        </div>
    );
};

export default LogInRegister;