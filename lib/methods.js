import Datas from '/lib/Datas';

const STAT_FIELD = {
    value: Number,
    min: Number,
    max: Number
};

Meteor.methods({
    updateStats(state) {
        check(state, {
            happiness: STAT_FIELD,
            billing: STAT_FIELD,
            learning: STAT_FIELD
        });

        Datas.upsert({
            _id: 'stats'
        }, state);
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
