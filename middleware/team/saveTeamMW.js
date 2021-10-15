/**
 * Using POST params update or save a team to the database
 * If res.locals.team is there, it's an update otherwise this middleware creates an entity
 * Redirects to /conference/:teamid after success
 * Conference in these terms means the actual conference the team is created in.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};