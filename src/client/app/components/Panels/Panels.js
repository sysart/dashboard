import React, { PropTypes } from 'react';

import FoodPanel from './FoodPanel/FoodPanel';
import StatsPanel from './StatsPanel/StatsPanel';
import TrafficPanel from './TrafficPanel/TrafficPanel';

import styles from './styles.css';

class Panels extends React.Component {

    constructor(props, context){
        super(props, context);

        this.panels = [
            {
                component: FoodPanel
            },
            {
                component: StatsPanel
            },
            {
                component: TrafficPanel
            }
        ];

    }

    render() {
        const panels = this.panels.map((panel, index) => {
            const Component = panel.component

            return (
                <div
                    className={styles.panel}
                    key={index}
                >
                    <Component />
                </div>
            );
        })

        return (
            <div className={styles.container}>
                {panels}
            </div>
        );
    }
}

export default Panels;
