/**
 * Load a player from the database using the :playerid param
 * The result is saved to res.locals.teamplayer
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel');
    return function(req, res, next) {
        PlayerModel.findOne(
            {
                _id: req.params.playerid
            },
            (err, player) => {
                if (err || !player) {
                    return next(err);
                }

                res.locals.player = player;

                console.log(res.locals.player.name)
                console.log(res.locals.player.position)
                console.log(res.locals.player.ppg)
                console.log(res.locals.player.trb)
                console.log(res.locals.player.ast)
                console.log(res.locals.player.mpg)
                console.log(res.locals.player._team)

                return next();
            }
        );
    };
};
