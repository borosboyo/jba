/**
 * Using POST params update or save a player to the database
 * If res.locals.player is there, it's an update otherwise this middleware creates an entity
 * Redirects to /conference/team after success
 * Team in these terms means the actual team the player is created in.
 * Conference in these terms means the actual conference the team is playing in.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel')
    return function (req, res, next) {
        if(
            typeof req.body.name === 'undefined' ||
            typeof req.body.position === 'undefined' ||
            typeof req.body.ppg === 'undefined' ||
            typeof req.body.trb === 'undefined' ||
            typeof req.body.ast === 'undefined' ||
            typeof req.body.mpg === 'undefined' ||
            typeof res.locals.team === 'undefined'
        ){
            return next();
        }

        if(typeof res.locals.player === 'undefined'){
            res.locals.player = new PlayerModel()
        }

        res.locals.player.name = req.body.name;
        res.locals.player.position = req.body.position;
        res.locals.player.ppg = parseInt(req.body.ppg, 10)
        res.locals.player.trb = parseInt(req.body.trb, 10)
        res.locals.player.ast = parseInt(req.body.ast, 10)
        res.locals.player.mpg = parseInt(req.body.mpg, 10)
        res.locals.player._team = res.locals.team._id

        res.locals.player.save(err => {
            if(err){
                return next(err)
            }
            return res.redirect(`/players/${res.locals.player._team}`);
        });
    };
};