import React from 'react';

class DateDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let today = new Date();

        let date = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`
        return (
            <div className="date">
                <h1>
                    {date}
                </h1>
            </div>
        );
    }
}

export default DateDisplay;
