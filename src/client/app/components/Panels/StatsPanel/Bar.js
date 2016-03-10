import React, { PropTypes } from 'react';
import Radium from 'radium';

class Bar extends React.Component {
    render() {
        const width = (this.props.value - this.props.min) / (this.props.max - this.props.min) * 100;
        const style = {
            width: `${width}%`
        };

        return (
            <div>
                <div style={[styles.bar, style]}></div>
            </div>

        );
    }
}

Bar.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

const styles = {
    container: {

    },
    bar: {
        background: 'white',
        height: '20px',
        marginBottom: '10px'
    }
};

export default Radium(Bar);
