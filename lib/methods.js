Meteor.methods({
    'updateStats'(state) {
        check(state, {
            happiness: Number,
            billing: Number,
            learning: Number
        });

        Datas.upsert({
            _id: 'stats'
        }, Object.assign({
            _id: 'stats'
        }, state));
    }
});
