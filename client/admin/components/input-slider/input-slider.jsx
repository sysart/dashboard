import React, { PropTypes } from 'react';

import Slider from 'material-ui/lib/slider';
import TextField from 'material-ui/lib/text-field';

class InputSlider extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.value
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            value: props.value
        });
    }

    textFieldChanged(event) {
        let value = parseFloat(this.refs.textField.getValue()) || 0;

        if (value < this.props.min) value = this.props.min;
        if (value > this.props.max) value = this.props.max;

        this.setState({ value });
    }

    sliderChanged(event, value) {
        this.setState({ value });
    }

    getValue() {
        return this.state.value;
    }

    render() {
        return (<div>
            <TextField
                floatingLabelText={this.props.label}
                type="number"
                ref="textField"
                min={this.props.min}
                max={this.props.max}
                value={this.state.value}
                onChange={this.textFieldChanged.bind(this)}/>
            <Slider
                min={this.props.min}
                max={this.props.max}
                value={this.state.value}
                onChange={this.sliderChanged.bind(this)}/>
        </div>);

    }
}

InputSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number,
    label: PropTypes.string.isRequired
};

export default InputSlider;
