import React from 'react';
import Radium from 'radium';

import TimeDisplay from './TimeDisplay.jsx';
import DateDisplay from './DateDisplay.jsx';

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
    fontSize: '32px',
    marginBottom: '10px'
};

export default Radium(ClockDisplay);
