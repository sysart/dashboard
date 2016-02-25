import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';

import RaisedButton from 'material-ui/lib/raised-button';

import InputSlider from '../InputSlider/InputSlider.jsx';

import Datas from '/lib/Datas';

class StatsEditor extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.inputs = [
            {
                label: 'Happiness',
                key: 'happiness',
                min: 1,
                max: 5
            },
            {
                label: 'Billing',
                key: 'billing',
                min: 0,
                max: 80
            },
            {
                label: 'Learning',
                key: 'learning',
                min: 0,
                max: 20
            }
        ];
    }

    getMeteorData() {
        Meteor.subscribe('datas');

        return {
            stats: Datas.findOne('stats')
        };
    }

    updateStats() {
        let stats = this.inputs.reduce((values, input) => {
            values[input.key] = {
                value: this.refs[input.key].getValue(),
                min: input.min,
                max: input.max
            };
            return values;
        }, {});

        Meteor.call('updateStats', stats);
    }

    render() {
        const inputs = this.inputs.map((input) => {
            const value = (this.data.stats && this.data.stats[input.key].value) || input.min;

            return (<div key={input.key}>
                <InputSlider
                    label={input.label}
                    ref={input.key}
                    min={input.min}
                    max={input.max}
                    value={value}/>
            </div>)
        });

        return (<div>
            {inputs}
            <RaisedButton label="Update" primary={true} onClick={this.updateStats.bind(this)} />
        </div>);
    }
}

reactMixin.onClass(StatsEditor, ReactMeteorData);

export default StatsEditor;
