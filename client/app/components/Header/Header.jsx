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
            <div style={styles.clock}>
                <ClockDisplay />
            </div>
            <img style={styles.logo} src="/images/sysboard.svg" />
        </div>
    );
  }
}

const styles = {
    container: {
        position: 'relative',
        height: '76px',
        margin: '10px'
    },
    clock: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    logo: {
        display: 'block',
        height: '100%',
        margin: '0 auto'
    }
};


export default Radium(Header);
