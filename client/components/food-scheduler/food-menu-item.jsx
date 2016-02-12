import React from 'react';
import mock from './mock.js';

class FoodMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
      const {Name,Price,Components} = this.props.item;
      const meals = Components.map((component,i) => {
        return(
          <div key={i} className="meal">{component}</div>
        )
      })
      let name = '';
      if(Name) {
        name = <div className="food-name">{Name}</div>;
      }
      return (
        <div className="food-items">
          {name}
          <div>{meals}</div>
          <div className="food-price">Hinta: {Price}</div>
        </div>
      )
    }
}

export default FoodMenuItem;
