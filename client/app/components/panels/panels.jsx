import React, { PropTypes } from 'react';

import Timedisplay from '../timedisplay/timedisplay.jsx'
import FoodScheduler from '../food-scheduler/food-scheduler.jsx'
import Stats from '../stats/stats.jsx'

class Panels extends React.Component {

    constructor(props, context){
        super(props, context);

        this.panels = [
            {
                component: FoodScheduler,
                startTime: 8,
                endTime: 13,
                priority: 1,
                size: 1
            },
            {
                component: Stats
            }
        ];

    }

    render() {
        const panels = this.panels.map((panel, index) => {
            const Component = panel.component
            let className = `panel panel-size-${panel.size} col-sm-4`;

            return (
                <div
                    className={className}
                    key={index}
                >
                    <Component />
                </div>
            );
        })

        return (
            <div className="container-fluid">
                <div className="panels row">
                    {panels}
                </div>
            </div>
        );
    }
}


export default Panels;
