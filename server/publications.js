import Datas from '/lib/Datas';

Meteor.publish('datas', function () {
    return [
        Datas.find()
    ];
});
