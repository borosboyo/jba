/**
 * Load a player from the database using the :playerid param
 * The result is saved to res.locals.teamplayer
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
