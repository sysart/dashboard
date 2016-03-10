import React, { PropTypes } from 'react';

import ClockDisplay from '../ClockDisplay/ClockDisplay'

import styles from './styles.css';

class Header extends React.Component {
  constructor(props, context){
      super(props, context);
  }

  render() {
    return (
        <div className={styles.container}>
            <div className={styles.clock}>
                <ClockDisplay />
            </div>
            <img className={styles.logo} src="/images/sysboard.svg" />
        </div>
    );
  }
}

export default Header;
