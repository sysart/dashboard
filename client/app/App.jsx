import React, { PropTypes } from 'react';
import Radium from 'radium';

import Panels from './components/Panels/Panels.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

class App extends React.Component {

  constructor(props, context){
      super(props, context);

  }

  render() {
    return (
        <div style={styles.container}>
            <Header />
            <Panels />
            <Footer />
        </div>

    );
  }
}

const styles = {
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: 'url("https://unsplash.it/1920/1080/?image=993")',
        backgroundSize: 'cover',
        fontFamily: '"Roboto", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
};

export default Radium(App);
