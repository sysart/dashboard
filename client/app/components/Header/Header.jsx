import React, { PropTypes } from 'react';
import Radium from 'radium';

import ClockDisplay from '../ClockDisplay/ClockDisplay.jsx'

class Header extends React.Component {
  constructor(props, context){
      super(props, context);
  }

  render() {
    return (
        <div style={styles.container}>
            <img style={styles.logo} src="/images/sysboard.svg" />
            <div style={styles.clock}>
                <ClockDisplay />
            </div>
        </div>
    );
  }
}

const styles = {
    container: {
        textAlign: 'center'
    },
    clock: {
        float: 'left'
    },
    logo: {
        maxWidth: '200px'
    }
};


export default Radium(Header);
