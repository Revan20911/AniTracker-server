const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpcomingSchema = new Schema({
    title: String,
    src: String
});

const Upcoming = mongoose.model("Upcoming", UpcomingSchema, process.env.DB_UPCOMING);

module.exports = Upcoming;