const Schema = require('mongoose').Schema
const db = require('../config/db')

const Team = db.model('Team', {
    name: String,
    wins: Number,
    losses: Number,
    headCoach: String

});

module.exports = Team;




