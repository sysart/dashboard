import React from 'react';

import TimeDisplay from './TimeDisplay.jsx';
import DateDisplay from './DateDisplay.jsx';

import styles from './kello.css';

class ClockDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timedisplay">
                <DateDisplay></DateDisplay>
                <TimeDisplay></TimeDisplay>
            </div>
        );
    }
}

export default ClockDisplay;
