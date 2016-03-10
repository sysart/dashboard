import React from 'react';
import moment from 'moment';

class DateDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);

        this.state = {
            date: ''
        };
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
            <div>
                {this.state.date}
            </div>
        );
    }
}

export default DateDisplay;
