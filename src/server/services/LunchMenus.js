import moment from 'moment';
// import cheerio from 'cheerio';
import Datas from 'lib/collections/Datas';

Meteor.startup(function () {
    let lunchMenus = Datas.findOne('lunchMenus');
    if (!lunchMenus || !moment(lunchMenus.date).isSame(moment(), 'day')) {
        // update();
    }
});

SyncedCron.add({
    name: 'Update lunch menus',
    schedule(parser) {
        return parser.text('at 9:00am every weekday');
    },
    job() {
        update();
    }
});



function update() {
    console.log('Loading lunch menus...');

    let amica = loadAmica();
    let thai = loadThai();

    Datas.upsert({
        _id: 'lunchMenus'
    }, {
        $set: {
            date: moment().format('YYYY-MM-DD'),
            amica,
            thai
        }
    });
}

function loadAmica() {
    const now = moment();

    let {data} = HTTP.get('http://www.amica.fi/modules/json/json/Index?costNumber=3131&language=fi');

    let menu = data.MenusForDays.find((menu) => {
        return moment(menu.Date).isSame(now, 'day');
    });

    let sets = menu.SetMenus.map((setMenu) => {
        return {
            price: setMenu.Price,
            components: setMenu.Components.map((component) => {
                return component.match(/^.*(?=\()/)[0].trim()
            })
        };
    });

    return sets;
}

function loadThai() {
    let thisDay = moment().format('dddd').toUpperCase();

    let {content} = HTTP.get('http://tasteofthai.fi/lunch-menu/');
    $ = cheerio.load(content);

    let menu = $('.flip-box-heading').filter((i, el) => {
        return $(el).text() === thisDay;
    }).closest('.fusion-flip-box').find('.flip-box-back-inner').text();

    let re = /(\*(.*)\*)?([^*]+)/gm;
    let found, sets = [];
    while (found = re.exec(menu)) {
        sets.push({
            name: found[2] && found[2].trim(),
            components: found[3].trim().split(/\n+/).map((component) => {
                return component.substr(1).trim();
            })
        });
    }

    return sets;
}
