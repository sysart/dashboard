import React, { PropTypes } from 'react';

import Timedisplay from '../timedisplay/timedisplay.jsx'

class Panels extends React.Component {

  constructor(props, context){
      super(props, context);

      this.panels = [
          {
              component: Timedisplay,
              statTime: 10,
              endTime: 18,
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
