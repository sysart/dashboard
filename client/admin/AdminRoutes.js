import React from 'react';
import {Route} from 'react-router';

import Admin from './Admin';
import StatsEditor from './components/StatsEditor/StatsEditor';
import MessageEditor from './components/MessageEditor/MessageEditor';


export default (
    <Route path="/admin" component={Admin}>
        <Route path="/admin/stats" component={StatsEditor} />
        <Route path="/admin/message" component={MessageEditor} />
    </Route>
);
