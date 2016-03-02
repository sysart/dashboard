import moment from 'moment';

import Datas from './collections/Datas';
import Stats from './collections/Stats';

Meteor.methods({
    updateStats(state) {
        check(state, {
            happiness: Number,
            billing: Number,
            learning: Number
        });

        let date = moment().format('YYYY-MM-DD');

        Stats.upsert({
            date
        }, {
            $set: Object.assign(state, {
                date
            })
        });
    },

    updateMessage(message) {
        check(message, String);

        Datas.upsert({
            _id: 'message'
        }, {
            text: message
        });
    }
});
