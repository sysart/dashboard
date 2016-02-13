import React, { PropTypes } from 'react';

import Panels from './components/Panels/Panels.jsx';
import Header from './components/Header/Header.jsx';

class App extends React.Component {

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

export default App;
