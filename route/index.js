const renderMW = require('../middleware/renderMW');

const delPlayerMW = require('../middleware/player/delPlayerMW')
const getPlayerMW = require('../middleware/player/getPlayerMW')
const getPlayersMW = require('../middleware/player/getPlayersMW')
const savePlayerMW = require('../middleware/player/savePlayerMW')

const delTeamMW = require('../middleware/team/delTeamMW')
const getTeamMW = require('../middleware/team/getTeamMW')
const getTeamsMW = require('../middleware/team/getTeamsMW')
const saveTeamMW = require('../middleware/team/saveTeamMW')

const PlayerModel = require('../model/player');
const TeamModel = require('../model/team');

module.exports = function (app) {
    const objRepo = {
        PlayerModel: PlayerModel,
        TeamModel: TeamModel
    };

    app.get(
        '/east',
        getTeamsMW(objRepo,'east'),
        renderMW(objRepo, 'eastern'));

    app.use(
        '/east/new',
        saveTeamMW(objRepo, 'east'),
        renderMW(objRepo, 'newEastern')
    );

    app.get(
        '/west',
        getTeamsMW(objRepo, 'west'),
        renderMW(objRepo, 'western'));

    app.use(
        '/west/new',
        saveTeamMW(objRepo, 'west'),
        renderMW(objRepo, 'newWestern')
    );

    app.get(
        '/east/del/:teamid',
        getTeamMW(objRepo),
        delTeamMW(objRepo, '/east'),
    );

    app.get(
        '/west/del/:teamid',
        getTeamMW(objRepo),
        delTeamMW(objRepo,'/west'),
    );

    app.use(
        '/east/edit/:teamid',
        getTeamMW(objRepo),
        saveTeamMW(objRepo, 'east'),
        renderMW(objRepo, 'modTeam')
    );

    app.use(
        '/west/edit/:teamid',
        getTeamMW(objRepo),
        saveTeamMW(objRepo, 'west'),
        renderMW(objRepo, 'modTeam')
    );

    app.get(
        '/players/:teamid',
        getTeamMW(objRepo),
        getPlayersMW(objRepo),
        renderMW(objRepo, 'teamPage')
    );

    app.use(
        '/players/:teamid/new',
        getTeamMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'newPlayer')
    );

    app.use(
        '/players/:teamid/edit/:playerid',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'modPlayer')
    );

    app.get(
        '/players/:teamid/del/:playerid',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        delPlayerMW(objRepo),
        renderMW(objRepo, 'teamPage')
    );

    app.use('/', renderMW(objRepo, 'index'));

}