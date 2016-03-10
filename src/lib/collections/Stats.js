let Stats = new Mongo.Collection('dailyStats');

Stats.STATS = {
    happiness: {
        min: 1,
        max: 5
    },
    billing: {
        min: 0,
        max: 80
    },
    learning: {
        min: 0,
        max: 20
    }
};

Stats.attachSchema({
    date: {
        type: String,
        regEx: /^\d{4}-\d{2}-\d{2}$/
    },
    happiness: {
        type: Number,
        decimal: true,
        min: Stats.STATS.happiness.min,
        max: Stats.STATS.happiness.max
    },
    billing: {
        type: Number,
        decimal: true,
        min: Stats.STATS.billing.min,
        max: Stats.STATS.billing.max
    },
    learning: {
        type: Number,
        decimal: true,
        min: Stats.STATS.learning.min,
        max: Stats.STATS.learning.max
    }
});

export default Stats;
