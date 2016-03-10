import moment from 'moment';
import cheerio from 'cheerio';
import Datas from 'lib/collections/Datas';

Meteor.startup(function () {
    update();
});

SyncedCron.add({
    name: 'Update traffic',
    schedule(parser) {
        return parser.text('every 2 minutes');
    },
    job() {
        update();
    }
});



function update() {
    console.log('Loading lunch menus...');

    let traffic = loadTraffic();

    Datas.upsert({
        _id: 'traffic'
    }, {
        $set: traffic
    });
}

function loadTraffic() {
    // {1,300}<averagespeed1>(\d{1,3})</averagespeed1>.{1,10}<averagespeed2>(\d{1,3})</averagespeed2>
    const regexPattern = /<lamid>101<\/lamid>.{1,200}<averagespeed1>(\d{1,3})<\/averagespeed1>.{0,10}<averagespeed2>(\d{1,3})<\/averagespeed2>/;

    let {content} = HTTP.get('http://tie.digitraffic.fi/sujuvuus/ws/lamData');

    let regexResult = content.match(regexPattern);

    let speedLanteen = regexResult[1];
    let speedItaan = regexResult[2];

    return {
        speedLanteen,
        speedItaan
    };
}
