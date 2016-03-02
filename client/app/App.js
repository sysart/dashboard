import React, { PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';

import Panels from './components/Panels/Panels';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  constructor(props, context){
      super(props, context);

  }

  render() {
    return (
        <StyleRoot>
            <div className="app" style={styles.container}>
                <Header />
                <Panels />
                <Footer />
            </div>
        </StyleRoot>
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
