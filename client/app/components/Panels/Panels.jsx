import React, { PropTypes } from 'react';
import Radium from 'radium';

import FoodPanel from '../FoodPanel/FoodPanel.jsx'
import StatsPanel from '../StatsPanel/StatsPanel.jsx'

class Panels extends React.Component {

    constructor(props, context){
        super(props, context);

        this.panels = [
            {
                component: FoodPanel,
                startTime: 8,
                endTime: 13,
                priority: 1,
                size: 1
            },
            {
                component: StatsPanel
            },
            {
                component: FoodPanel
            }
        ];

    }

    render() {
        const panels = this.panels.map((panel, index) => {
            const Component = panel.component

            return (
                <div
                    style={styles.panel}
                    key={index}
                >
                    <Component />
                </div>
            );
        })

        return (
            <div style={styles.container}>
                {panels}
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        marginLeft: '-20px'
    },
    panel: {
        flex: '1',
        marginLeft: '20px'
    }
};

export default Radium(Panels);
