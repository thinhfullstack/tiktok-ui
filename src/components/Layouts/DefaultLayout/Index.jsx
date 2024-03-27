import React from 'react';
import Header from '@/components/Layouts/components/Header/Index';
import Siderbar from '@/components/Layouts/DefaultLayout/Sidebar/Index';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Siderbar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
