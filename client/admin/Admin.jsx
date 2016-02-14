import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';
import Radium from 'radium'

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
        return (
            <div>
                <AppBar
                    title="Admin"
                    showMenuIconButton={false}
                />
                <div style={styles.container}>
                    <StatsEditor stats={this.data.stats}/>
                </div>
            </div>
        );
    }
}
reactMixin.onClass(Admin, ReactMeteorData);

const styles = {
    container: {
        maxWidth: '960px',
        margin: '0 auto'
    }
};

export default Radium(Admin);
