import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { routes } from '../../router';

const AppRouter: FC = () => {
    return (
        <Switch>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                />
            ))}
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRouter;
