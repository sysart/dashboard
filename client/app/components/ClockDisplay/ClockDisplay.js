import React from 'react';
import Radium from 'radium';

import TimeDisplay from './TimeDisplay';
import DateDisplay from './DateDisplay';

class ClockDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles}>
                <DateDisplay style={styles.date}></DateDisplay>
                <TimeDisplay style={styles.time}></TimeDisplay>
            </div>
        );
    }
}

const styles = {
    fontSize: '32px'
};

export default Radium(ClockDisplay);