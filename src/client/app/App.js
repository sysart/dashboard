import React, { PropTypes } from 'react';

import Panels from './components/Panels/Panels';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import styles from './styles.css';

class App extends React.Component {

  constructor(props, context){
      super(props, context);
  }

  render() {
    return (
        <div className={styles.container}>
            <Header />
            <Panels />
            <Footer />
        </div>
    );
  }
}

export default App;
