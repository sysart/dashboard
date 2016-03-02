import React from 'react';
import Radium from 'radium';
import moment from 'moment';

class DateDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    tick() {
        this.setState({
            date: moment().format('D.M.YYYY')
        });

        let timeout = moment().endOf('day') - moment();
        if (timeout > 60000) timeout = 60000;
        this.timeout = setTimeout(this.tick, timeout);
    }

    render() {
        return (
            <div style={styles}>
                {this.state.date}
            </div>
        );
    }
}

const styles = {
    fontWeight: '100'
}

export default Radium(DateDisplay);
