import React from 'react';
import reactMixin from 'react-mixin';

import FoodMenuItem from './FoodMenuItem'

import Datas from 'lib/collections/Datas';

import styles from './styles.css';

@reactMixin.decorate(ReactMeteorData)
class FoodPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    getMeteorData() {
        Meteor.subscribe('datas');

        return {
            menus: Datas.findOne('lunchMenus')
        };
    }

    render() {
        if (!this.data.menus) return (<div></div>);

        const amicaSets = this.data.menus.amica.map((set, i) => {
            return (<FoodMenuItem key={i} set={set} /> )
        });

        const thaiSets = this.data.menus.thai.map((set, i) => {
            return (<FoodMenuItem key={i} set={set} /> )
        });

        const menuStyle = {
            width: '50%',
            float: 'left',
            padding: '10px'
        }

        return (
            <div>
                <section>
                    <div style={menuStyle}>
                        <h1 className={styles.title}>Amica</h1>
                        {amicaSets}
                    </div>

                    <div style={menuStyle}>
                        <h1 className={styles.title}>Thai</h1>
                        {thaiSets}
                    </div>

                </section>

            </div>
        )
    }
}

export default FoodPanel;
