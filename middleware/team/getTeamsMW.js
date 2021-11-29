/**
 * Load all team from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository, conf) {
    const TeamModel = requireOption(objectrepository, 'TeamModel');
    return function (req, res, next) {
        TeamModel.find({conference: conf}, (err, teams) => {
            if(err) {
                return next(err);
            }

            res.locals.teams = teams;
            return next();
        });
    };
};
