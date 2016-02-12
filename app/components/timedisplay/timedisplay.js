require('./timedisplay.scss');

import React from 'react';

import Clock from '../clock/clock';
import Date from '../date/date';

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
