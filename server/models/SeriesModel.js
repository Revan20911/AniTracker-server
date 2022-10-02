const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSeries = new Schema({
        title: String,
        img: String,
        desc: String,
        episodes: String,
        characters: Array
});

const Series = mongoose.model('Series', animeSeries, process.env.DB_SERIES);

module.exports = Series;
