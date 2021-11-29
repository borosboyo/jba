const Schema = require('mongoose').Schema
const db = require('../middleware/config/db')

const Team = db.model('Team', {
    name: String,
    wins: Number,
    losses: Number,
    headCoach: String,
    conference: String
});

module.exports = Team;




