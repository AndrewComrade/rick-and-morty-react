import React from 'react';

import HomePage from '../pages/HomePage';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact: boolean;
}

export enum RouteNames {
    HOME = '/',
}

export const routes: IRoute[] = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
];
