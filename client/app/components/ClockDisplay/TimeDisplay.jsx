import React from 'react';
import Radium from 'radium';
import moment from 'moment';

class TimeDisplay extends React.Component {
    constructor(props) {
        super(props);
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
            <div style={styles}>
                {this.state.time}
            </div>
        );
    }
}

const styles = {
    fontWeight: 'bold'
};

export default Radium(TimeDisplay);
