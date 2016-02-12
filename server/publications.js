Meteor.publish('datas', function () {
    return [
        Datas.find()
    ];
});
