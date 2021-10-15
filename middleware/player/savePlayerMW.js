/**
 * Using POST params update or save a player to the database
 * If res.locals.player is there, it's an update otherwise this middleware creates an entity
 * Redirects to /conference/team after success
 * Team in these terms means the actual team the player is created in.
 * Conference in these terms means the actual conference the team is playing in.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};