import React, { PropTypes } from 'react';

import Timedisplay from '../timedisplay/timedisplay.jsx'

class Header extends React.Component {

  constructor(props, context){
      super(props, context);
  }



  render() {
    return (
        <div className="header">
            <Timedisplay />
        </div>
    );
  }
}


export default Header;
