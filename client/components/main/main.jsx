import React, { PropTypes } from 'react';

import Panels from '../panels/panels.jsx';
import Timedisplay from '../timedisplay/timedisplay.jsx';


class AppComponent extends React.Component {

  constructor(props, context){
      super(props, context);

  }

  render() {
    return (
        <Panels />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
