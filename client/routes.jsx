import React from 'react';
import {mount} from 'react-mounter';

import App from './app/App.jsx';
import Admin from './admin/Admin.jsx';

FlowRouter.route('/', {
    action() {
        mount(App);
    },
    subscriptions(params, queryParams) {
        this.register('datas', Meteor.subscribe('datas'));
    }
});

FlowRouter.route('/admin', {
    action() {
        mount(Admin);
    },
    subscriptions(params, queryParams) {
        this.register('datas', Meteor.subscribe('datas'));
    }
});
