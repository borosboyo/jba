/**
 * Using POST params update or save a team to the database
 * If res.locals.team is there, it's an update otherwise this middleware creates an entity
 * Redirects to /conference/:teamid after success
 * Conference in these terms means the actual conference the team is created in.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository, conf) {
    const TeamModel = requireOption(objectrepository, 'TeamModel')
    return function (req, res, next) {
        if(
            typeof req.body.name === 'undefined' ||
            typeof req.body.wins === 'undefined' ||
            typeof req.body.losses === 'undefined' ||
            typeof req.body.headCoach === 'undefined'
        ){
            return next()
        }

        if(typeof res.locals.team === 'undefined'){
            res.locals.team = new TeamModel()
        }
        res.locals.team.name = req.body.name
        res.locals.team.wins = parseInt(req.body.wins,10)
        res.locals.team.losses = parseInt(req.body.losses,10)
        res.locals.team.headCoach = req.body.headCoach
        res.locals.team.conference = conf


        res.locals.team.save(err => {
            if(err) {
                return next(err)
            }
            return res.redirect('/' + conf)
        })
    };
};