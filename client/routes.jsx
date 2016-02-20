import React from 'react';
import {render} from 'react-dom';
import {Router, Route, NotFoundRoute, browserHistory} from 'react-router';

import App from './app/App.jsx';

import Admin from './admin/Admin.jsx';
import StatsEditor from './admin/components/StatsEditor/StatsEditor.jsx';
import MenuEditor from './admin/components/MenuEditor/MenuEditor.jsx';

Meteor.startup(function () {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/admin" component={Admin}>
                <Route path="/admin/stats" component={StatsEditor} />
                <Route path="/admin/menu" component={MenuEditor} />
            </Route>
        </Router>
    ), document.getElementById('app-container'));
});
