import React from 'react';
import moment from 'moment';

class TimeDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: ''
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
        this.tick();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            time: moment().format('HH:mm:ss')
        });
    }

    render() {
        return (
            <div>
                {this.state.time}
            </div>
        );
    }
}

export default TimeDisplay;
