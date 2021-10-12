import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.jpg';

import styles from './index.module.scss';

import { RouteNames } from '../../router';

const AppBar: FC = () => {
    return (
        <div className={styles.AppBar}>
            <div className={styles.AppBar_Container}>
                <div className={styles.AppBar_LogoWrapper}>
                    <Link to={RouteNames.HOME}>
                        <img
                            className={styles.AppBar_LogoImage}
                            src={logo}
                            alt="Rick and Morty logo"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppBar;
