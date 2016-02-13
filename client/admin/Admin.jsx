import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';

import AppBar from 'material-ui/lib/app-bar';

import StatsEditor from './components/StatsEditor/StatsEditor.jsx';

import Datas from '/lib/Datas';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    getMeteorData() {
        return {
            stats: Datas.findOne('stats') || {}
        };
    }

    render() {
        return (<div>
            <AppBar
                title="Admin"
                showMenuIconButton={false}
            />
            <div className="container-fluid">
                <div className="row center-sm">
                    <div className="col-xs col-sm-6 start-sm">
                        <StatsEditor stats={this.data.stats}/>
                    </div>
                </div>
            </div>
        </div>);
    }
}

reactMixin.onClass(Admin, ReactMeteorData);

export default Admin;
