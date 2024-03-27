import React from 'react';
import styles from './DefaultLayout.module.scss';
import Header from '@/components/Layouts/components/Header/Index';
import Siderbar from '@/components/Layouts/DefaultLayout/Sidebar/Index';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Siderbar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
