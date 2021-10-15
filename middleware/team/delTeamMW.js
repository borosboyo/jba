/**
 * Removes a team from the database, the entity used here is: res.locals.team
 * Redirects to /conference after delete
 * Conference in these terms means the actual conference the team is deleted in.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
