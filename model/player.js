const Schema = require('mongoose').Schema
const db = require('../middleware/config/db')

const Player = db.model('Player', {
    name: String,
    position: String,
    ppg: Number,
    trb: Number,
    ast: Number,
    mpg: Number,
    _team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = Player