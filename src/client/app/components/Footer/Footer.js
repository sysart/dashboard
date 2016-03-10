import _ from 'lodash';
import React, { PropTypes } from 'react';
import reactMixin from 'react-mixin';

import Datas from 'lib/collections/Datas';

import styles from './styles.css';

@reactMixin.decorate(ReactMeteorData)
class Footer extends React.Component {
    getMeteorData() {
        Meteor.subscribe('datas');

        return {
            message: Datas.findOne('message')
        };
    }

    render() {
        const message = this.data.message && this.data.message.text ? this.data.message.text : '';

        console.log('styles', styles);

        return (
            <div className={styles.container}>
                <marquee>{message}</marquee>
            </div>
        );
    }
}

export default Footer;
