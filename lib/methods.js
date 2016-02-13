import Datas from '/lib/Datas';

Meteor.methods({
    'updateStats'(state) {
        check(state, {
            happiness: Number,
            billing: Number,
            learning: Number
        });

        Datas.upsert({
            _id: 'stats'
        }, state);
    }
});
