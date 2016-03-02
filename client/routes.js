import React from 'react';
import {render} from 'react-dom';
import {Router, Route, NotFoundRoute, browserHistory} from 'react-router';

import App from './app/App';
import AdminRoutes from './admin/AdminRoutes';

Meteor.startup(function () {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            {AdminRoutes}
        </Router>
    ), document.getElementById('app-container'));
});