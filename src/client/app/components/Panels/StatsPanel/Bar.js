import React, { PropTypes } from 'react';

import styles from './styles.css';

class Bar extends React.Component {
    render() {
        const width = (this.props.value - this.props.min) / (this.props.max - this.props.min) * 100;
        const style = {
            width: `${width}%`
        };

        return (
            <div>
                <div className={[styles.bar, style]}></div>
            </div>
        );
    }
}

Bar.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

export default Bar;
