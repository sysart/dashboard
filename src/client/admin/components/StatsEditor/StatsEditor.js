import moment from 'moment';

import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';

import RaisedButton from 'material-ui/lib/raised-button';

import InputSlider from '../InputSlider/InputSlider';

import Stats from 'lib/collections/Stats';

@reactMixin.decorate(ReactMeteorData)
class StatsEditor extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.inputs = [
            {
                label: 'Happiness',
                key: 'happiness'
            },
            {
                label: 'Billing',
                key: 'billing'
            },
            {
                label: 'Learning',
                key: 'learning'
            }
        ];
    }

    getMeteorData() {
        Meteor.subscribe('stats');

        return {
            stats: Stats.findOne({
                date: moment().format('YYYY-MM-DD')
            })
        };
    }

    updateStats() {
        let stats = this.inputs.reduce((values, input) => {
            values[input.key] = this.refs[input.key].getValue();
            return values;
        }, {});

        Meteor.call('updateStats', stats);
    }

    render() {
        const inputs = this.inputs.map((input) => {
            const value = (this.data.stats && this.data.stats[input.key]) || Stats.STATS[input.key].min;

            return (
                <div key={input.key}>
                    <InputSlider
                        label={input.label}
                        ref={input.key}
                        min={Stats.STATS[input.key].min}
                        max={Stats.STATS[input.key].max}
                        value={value}/>
                </div>
            )
        });

        return (
            <div>
                <h1>STATS EDITOR</h1>
                {inputs}
                <RaisedButton label="Update" primary={true} onClick={this.updateStats.bind(this)} />
            </div>
        );
    }
}

export default StatsEditor;
