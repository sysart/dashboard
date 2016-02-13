import Datas from '/lib/Datas';

Meteor.startup(function () {
    if (!Datas.findOne('lunchMenus')) {
        Meteor.call('updateLunchMenus');
    }
});
