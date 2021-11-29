/**
 * Removes a team from the database, the entity used here is: res.locals.team
 * Redirects to /conference after delete
 * Conference in these terms means the actual conference the team is deleted in.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository, conf) {
    return function (req, res, next) {
        if(typeof res.locals.team === 'undefined'){
            return next();
        }
        res.locals.team.remove(err => {
            if(err){
                return next(err);
            }

            return res.redirect(conf);
        });
    };
};
