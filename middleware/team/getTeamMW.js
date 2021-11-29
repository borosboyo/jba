/**
 * Load a team from the database using the :teamid param
 * The result is saved to res.locals.team
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function(req, res, next) {
        TeamModel.findOne({ _id: req.params.teamid }, (err, team) => {
            if (err || !team) {
                return next(err);
            }

            res.locals.team = team;
            return next();
        });
    };
};