import React from 'react';
import reactMixin from 'react-mixin';

import Datas from 'lib/collections/Datas';

import styles from './styles.css';

@reactMixin.decorate(ReactMeteorData)
class TrafficPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    getMeteorData() {
        Meteor.subscribe('datas');

        return {
            traffic: Datas.findOne('traffic')
        };
    }

    render() {
        if (!this.data.traffic) return (<div></div>);

        return (
            <div>
                <section>
                    <h1 className={styles.title}>Länsiväylän nopeus:</h1>
                    <p>Itään: {this.data.traffic.speedItaan} km/h</p>
                    <p>Länteen: {this.data.traffic.speedLanteen} km/h</p>
                </section>

            </div>
        )
    }


}

export default TrafficPanel;
