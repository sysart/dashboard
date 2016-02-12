import React, { PropTypes } from 'react';

import Timedisplay from '../timedisplay/timedisplay.jsx'
import FoodScheduler from '../food-scheduler/food-scheduler.jsx'

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
          }
      ];

  }

  componentDidMount(){
      setInterval(() => {
          this.forceUpdate()
      }, 1000);
  }

  render() {

      const panels = this.panels.map((panel, index) => {
        const Component = panel.component
        let className = `panel panel-size-${panel.size}`;
          return (
              <div
                  className={className}
                  key={index}
                  >
                    <Component  />
              </div>
          );
      })

    return (
        <div className="panels">
            {panels}
        </div>
    );
  }
}


export default Panels;
