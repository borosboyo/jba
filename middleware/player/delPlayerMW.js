/**
 * Removes a player from the database, the entity used here is: res.locals.player
 * Redirects to /conference/team after delete
 * Team in these terms means the actual team the player is deleted in.
 * Conference in these terms means the actual conference the team is playing in.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
