import React from 'react';
import {mount} from 'react-mounter';

import AppComponent from './app/main.jsx';
import Admin from './admin/admin.jsx';

FlowRouter.route('/', {
    action() {
        mount(AppComponent, {}, {
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
