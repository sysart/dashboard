import React, { PropTypes } from 'react';

import ClockDisplay from '../ClockDisplay/ClockDisplay.jsx'

class Header extends React.Component {

  constructor(props, context){
      super(props, context);
  }



  render() {
    return (
        <div className="header">
            <ClockDisplay />
        </div>
    );
  }
}


export default Header;
