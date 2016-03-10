import React from 'react';

import TimeDisplay from './TimeDisplay';
import DateDisplay from './DateDisplay';

import styles from './styles.css';

class ClockDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <DateDisplay className={styles.date}></DateDisplay>
                <TimeDisplay className={styles.time}></TimeDisplay>
            </div>
        );
    }
}

export default ClockDisplay;
