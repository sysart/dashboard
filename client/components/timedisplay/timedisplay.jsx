import React from 'react';

import Clock from '../clock/clock.jsx';
import Date from '../date/date.jsx';

class TimedisplayComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timedisplay">
                <Date></Date>
                <Clock></Clock>
            </div>
        );
    }
}

export default TimedisplayComponent;
