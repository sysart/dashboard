import _ from 'lodash';
import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';
import Radium from 'radium';

import Datas from '/lib/Datas';
import Awesome from '/lib/Awesome';

const SPACER = '°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°';
const SPACE = Array(5).fill('\u00a0').join('');

class Footer extends React.Component {
    getMeteorData() {
        Meteor.subscribe('datas');

        return {
            message: Datas.findOne('message')
        };
    }

    render() {
        const message = this.data.message && this.data.message.text ? this.data.message.text : Array(20).fill().map(() => {
            return _.sample(Awesome);
        }).join('JOKKE').replace(/JOKKE/g, () => {
            return SPACE + Array(~~(Math.random() * 10) + 1).fill(SPACER) + SPACE;
        });

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
