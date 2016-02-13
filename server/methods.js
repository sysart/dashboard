import moment from 'moment';
import Datas from '/lib/Datas';

Meteor.methods({
    // this needs to be refactored
    updateLunchMenus() {
        updateAmica();
    }
});

function updateAmica() {
    const now = moment('2016-02-12');

    data = require('./menu.json');
    // let {data} = HTTP.get('http://www.amica.fi/modules/json/json/Index?costNumber=3131&language=fi');

    let menu = data.MenusForDays.find((menu) => {
        return moment(menu.Date).isSame(now, 'day');
    });

    let sets = menu.SetMenus.map((setMenu) => {
        return {
            price: setMenu.Price,
            components: setMenu.Components.map((component) => {
                return component.match(/^.*(?=\()/)[0].trim()
            })
        }
    });

    Datas.upsert({
        _id: 'lunchMenus'
    }, {
        $set: {
            amica: sets
        }
    });
}
