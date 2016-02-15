import React from 'react';
import reactMixin from 'react-mixin';
import Radium from 'radium';

import FoodMenuItem from './FoodMenuItem.jsx'

import Datas from '/lib/Datas';

class FoodPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    getMeteorData() {
        return {
            menus: Datas.findOne('lunchMenus')
        };
    }

    render() {
        if (!this.data.menus) return (<div></div>);

        const amicaSets = this.data.menus.amica.map((set, i) => {
            return (<FoodMenuItem key={i} set={set} /> )
        });

        return (
            <div>
                <section>
                    <h1 style={styles.title}>Amica</h1>
                    {amicaSets}
                </section>

            </div>
        )
    }
}
reactMixin.onClass(FoodPanel, ReactMeteorData);

const styles = {
    title: {
        margin: '0'
    }
};

export default Radium(FoodPanel);
