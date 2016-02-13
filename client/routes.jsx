import React from 'react';
import {mount} from 'react-mounter';

import App from './app/App.jsx';
import Admin from './admin/Admin.jsx';

FlowRouter.route('/', {
    action() {
        mount(App, {}, {
            rootProps: {
                className: 'app'
            }
        });
    },
    subscriptions(params, queryParams) {
        this.register('datas', Meteor.subscribe('datas'));
    }
});

FlowRouter.route('/admin', {
    action() {
        mount(Admin, {}, {
            rootProps: {
                className: 'admin'
            }
        });
    },
    subscriptions(params, queryParams) {
        this.register('datas', Meteor.subscribe('datas'));
    }
});
