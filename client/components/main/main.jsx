import React from 'react';

import Timedisplay from '../timedisplay/timedisplay.jsx';

class AppComponent extends React.Component {
  render() {
    return (
        <div className="main">
            <Timedisplay></Timedisplay>
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
