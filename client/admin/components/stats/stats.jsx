import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

import InputSlider from '../input-slider/input-slider.jsx';

class Stats extends React.Component {
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

        this.state = props.stats || {};
    }

    componentWillReceiveProps(props) {
        this.setState(props.stats);
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
            const value = this.state[input.key];

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

export default Stats;
