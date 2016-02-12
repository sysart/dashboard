import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';

import AppBar from 'material-ui/lib/app-bar';

import Stats from './components/stats/stats.jsx';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    getMeteorData() {
        let handle = Meteor.subscribe('datas');

        return {
            stats: Datas.findOne('stats') || {}
        };
    }

    render() {
        return (<div>
            <AppBar
                title="Admin"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            <div className="container">
                <h1>Admin</h1>
                <Stats stats={this.data.stats}/>
            </div>
        </div>);
    }
}

reactMixin.onClass(Admin, ReactMeteorData);

export default Admin;
