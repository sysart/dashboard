import React from 'react';
import reactMixin from 'react-mixin';

import Datas from '/lib/Datas';

import Bar from './Bar.jsx';

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
                <Bar value={this.data.stats.happiness.value} min={this.data.stats.happiness.min} max={this.data.stats.happiness.max}/>
                <Bar value={this.data.stats.billing.value} min={this.data.stats.billing.min} max={this.data.stats.billing.max}/>
                <Bar value={this.data.stats.learning.value} min={this.data.stats.learning.min} max={this.data.stats.learning.max}/>
            </div>
        )
    }
}

reactMixin.onClass(StatsPanel, ReactMeteorData);

export default StatsPanel;
