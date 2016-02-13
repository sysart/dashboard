import React from 'react';
import FoodMenuItem from './food-menu-item.jsx'
import reactMixin from 'react-mixin';

import Datas from '/lib/Datas';

class FoodScheduler extends React.Component {
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

        const items = this.data.menus.amica.map((set, i) => {
            return (<FoodMenuItem key={i} set={set} /> )
        });

        return (<div className="food-scheduler">{items}</div>)
    }
}

reactMixin.onClass(FoodScheduler, ReactMeteorData);

export default FoodScheduler;
