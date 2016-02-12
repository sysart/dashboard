import React, { PropTypes } from 'react';

import Panels from '../panels/panels.jsx';
import Timedisplay from '../timedisplay/timedisplay.jsx';
import Header from '../header/header.jsx';

class AppComponent extends React.Component {

  constructor(props, context){
      super(props, context);

  }

  render() {
    return (
        <div>
            <Header />
            <Panels />
        </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
