import _ from 'lodash';

import React from 'react';
import reactMixin from 'react-mixin';

import Stats from 'lib/collections/Stats';

import Bar from './Bar';

@reactMixin.decorate(ReactMeteorData)
class StatsPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    getMeteorData() {
        Meteor.subscribe('stats');

        return {
            stats: Stats.findOne({}, {
                order: {
                    date: -1
                }
            })
        };
    }

    render() {
        if (!this.data.stats) return (<div></div>);

        let counter = 0;

        const bars = _.map(Stats.STATS, (s, k) => {
            counter++;
            return (
                <Bar
                    key={k}
                    index={counter}
                    value={this.data.stats[k]}
                    min={s.min}
                    max={s.max}
                />
            );
        });

        return (
            <div style={{position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0}}>
                {bars}
            </div>
        )
    }
}

export default StatsPanel;
