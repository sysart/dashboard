import _ from 'lodash';
import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';
import Radium from 'radium';

import Datas from '/lib/Datas';

class Footer extends React.Component {
    getMeteorData() {
        Meteor.subscribe('datas');

        return {
            message: Datas.findOne('message')
        };
    }

    render() {
        const message = this.data.message && this.data.message.text ? this.data.message.text : '';

        return (
            <div style={styles.container}>
                <marquee>{message}</marquee>
            </div>
        );
    }
}
reactMixin.onClass(Footer, ReactMeteorData);

const styles = {
    container: {
        background: 'black',
        padding: '10px 0'
    }
};

export default Radium(Footer);
