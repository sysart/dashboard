import React from 'react';
import reactMixin from 'react-mixin';

import Datas from '/lib/Datas';

class StatsPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    getMeteorData() {
        return {
            stats: Datas.findOne('stats')
        };
    }

    render() {
        if (!this.data.stats) return (<div></div>);

        return (
            <div>
                <div>{this.data.stats.happiness}</div>
                <div>{this.data.stats.billing}</div>
                <div>{this.data.stats.learning}</div>
            </div>
        )
    }
}

reactMixin.onClass(StatsPanel, ReactMeteorData);

export default StatsPanel;
