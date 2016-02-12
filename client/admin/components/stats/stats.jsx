import React, { PropTypes } from 'react';

import Slider from 'material-ui/lib/slider';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

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

        this.state = {};
    }

    componentWillReceiveProps(props) {
        this.setState(props.stats);
    }

    syncField(input, event) {
        let value = parseFloat(this.refs[input.key].getValue()) || 0;
        if (value < input.min) value = input.min;
        if (value > input.max) value = input.max;

        this.setState({
            [input.key]: value
        });
    }

    syncSlider(input, event, value) {
        this.setState({
            [input.key]: value
        });
    }

    updateStats() {
        Meteor.call('updateStats', _.omit(this.state, '_id'));
    }

    render() {
        const inputs = this.inputs.map((input) => {
            const value = this.state[input.key];

            return (<div key={input.key}>
                <TextField
                    floatingLabelText={input.label}
                    type="number"
                    ref={input.key}
                    min={input.min}
                    max={input.max}
                    value={value}
                    onChange={this.syncField.bind(this, input)}/>
                <Slider
                    min={input.min}
                    max={input.max}
                    value={value}
                    onChange={this.syncSlider.bind(this, input)}/>
            </div>)
        });

        return (<div>
            {inputs}
            <RaisedButton label="Update" primary={true} onClick={this.updateStats.bind(this)} />
        </div>);
    }
}

export default Stats;
