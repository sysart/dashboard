import React, { PropTypes } from 'react';

import styles from './styles.css';

class Bar extends React.Component {
    render() {


        console.log('bar props', this);

        const height = (this.props.value - this.props.min) / (this.props.max - this.props.min) * 100;
        const style = {
            height: `${height}%`,

        };

        let m = this.props.index * 40 + 'px';

        return (
            <div style={{position: 'absolute',
                marginLeft: m,
    top: 0,
    bottom: 0,
}}>
                <div className={styles.bar} style={style}></div>
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
