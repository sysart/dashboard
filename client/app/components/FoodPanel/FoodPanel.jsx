import React from 'react';
import reactMixin from 'react-mixin';

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

        const items = this.data.menus.amica.map((set, i) => {
            return (<FoodMenuItem key={i} set={set} /> )
        });

        return (<div>{items}</div>)
    }
}
reactMixin.onClass(FoodPanel, ReactMeteorData);

export default FoodPanel;
