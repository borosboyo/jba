/**
 * Load all player from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel')
    return function (req, res, next) {
        if(typeof res.locals.team === 'undefined'){
            return next();
        }
        PlayerModel.find({_team: res.locals.team._id}, (err, players) => {
            if(err){
                return next(err);
            }

            res.locals.players = players;
            return next();
        });
    };
};
