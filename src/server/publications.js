import moment from 'moment';

import Datas from 'lib/collections/Datas';
import Stats from 'lib/collections/Stats';

Meteor.publish('stats', function () {
    return [
        Stats.find({}, {
            limit: 50,
            order: {
                date: -1
            }
        })
    ]
});

Meteor.publish('datas', function () {
    return [
        Datas.find()
    ];
});
