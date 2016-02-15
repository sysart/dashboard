import React, { PropTypes } from 'react';
import Radium from 'radium';

import Panels from './components/Panels/Panels.jsx';
import Header from './components/Header/Header.jsx';

class App extends React.Component {

  constructor(props, context){
      super(props, context);

  }

  render() {
    return (
        <div style={styles.container}>
            <Header />
            <Panels />
        </div>

    );
  }
}

const styles = {
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '20px',
        backgroundImage: 'url("https://unsplash.it/1920/1080/?image=993")',
        backgroundSize: 'cover',
        fontFamily: '"Roboto", sans-serif'
    }
};

export default Radium(App);
