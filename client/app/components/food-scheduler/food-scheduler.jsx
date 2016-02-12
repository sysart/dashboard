import React from 'react';
import mock from './mock.js';
import FoodMenuItem from './food-menu-item.jsx'

class FoodScheduler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false
        }
        this.foodList = JSON.parse(mock());
        this.menu = this.foodList.MenusForDays[0].SetMenus;
    }

    componentDidMount() {
      this.setState({isLoaded: true})
    }

    shouldComponentUpdate() {
      return !this.state.isLoaded;
    }

    render() {
      const {menu} = this;
      let items = menu.map((item, i) => {
        return (<FoodMenuItem key={i} item={item} /> )
      });
      return (<div className="food-scheduler">{items}</div>)
    }
}

export default FoodScheduler;
