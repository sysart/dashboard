import _ from 'lodash';
import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';
import Radium from 'radium';

import Datas from '/lib/collections/Datas';

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
                <div style={styles.marquee}>{message}</div>
            </div>
        );
    }
}
reactMixin.onClass(Footer, ReactMeteorData);

const marqueeAnimation = Radium.keyframes({
    '0%': {
        transform: 'translateX(100vw)'
    },
    '100%': {
        transform: 'translateX(-100%)'
    }
});

const styles = {
    container: {
        background: 'black',
        padding: '10px 0'
    },
    marquee: {
        display: 'inline-block',
        animation: 'x 20s linear infinite',
        animationName: marqueeAnimation
    }
};

export default Radium(Footer);
