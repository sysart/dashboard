require('./clock.scss');

import React from 'react';

class ClockComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        }

        this.tick = this.tick.bind(this);
    }

    tick() {
        let today = new Date();
        let hour = ('0' + today.getHours()).slice(-2) //010 => 10
        let minute = ('0' + today.getMinutes()).slice(-2);
        let second = ('0' + today.getSeconds()).slice(-2);

        this.setState({
            hour: hour,
            minute: minute,
            second: second
        });
    }

    componentDidMount() {
        window.setInterval(this.tick, 500);
    }

    render() {
        let time = `${this.state.hour}:${this.state.minute}:${this.state.second}`
        return (
            <div className="clock">
                <h1>
                    {time}
                </h1>
            </div>
        );
    }
}

export default ClockComponent;
