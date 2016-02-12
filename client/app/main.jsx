import React, { PropTypes } from 'react';

import Panels from './components/panels/panels.jsx';
import Timedisplay from './components/timedisplay/timedisplay.jsx';
import Header from './components/header/header.jsx';

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
