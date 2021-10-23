const renderMW = require('../middleware/renderMW');

const delPlayerMW = require('../middleware/player/delPlayerMW')
const getPlayerMW = require('../middleware/player/getPlayerMW')
const getPlayersMW = require('../middleware/player/getPlayersMW')
const savePlayerMW = require('../middleware/player/savePlayerMW')

const delTeamMW = require('../middleware/team/delTeamMW')
const getTeamMW = require('../middleware/team/getTeamMW')
const getTeamsMW = require('../middleware/team/getTeamsMW')
const saveTeamMW = require('../middleware/team/saveTeamMW')


module.exports = function (app) {
    const objRepo = {};

    app.get('/',
        renderMW(objRepo, 'index'));

    app.get('/east',
        getTeamsMW(objRepo),
        renderMW(objRepo, 'eastern'));

    app.get('/west',
        getTeamsMW(objRepo),
        renderMW(objRepo, 'western'));

    app.get('/east/new',
        saveTeamMW(objRepo),
        renderMW(objRepo, 'newEastern'));

    app.use('/west/new',
        saveTeamMW(objRepo),
        renderMW(objRepo, 'newWestern'));

    app.use('/east/edit/:teamid',
        getTeamMW(objRepo),
        renderMW(objRepo, 'modTeam'));

    app.use('/west/edit/:teamid',
        getTeamMW(objRepo),
        renderMW(objRepo, 'modTeam'));

    app.use('/east/del/:teamid',
        delTeamMW(objRepo),
        renderMW(objRepo, 'eastern'));

    app.use('/west/del/:teamid',
        delTeamMW(objRepo),
        renderMW(objRepo, 'western'));

    app.use('/:teamid/new',
        savePlayerMW(objRepo),
        renderMW(objRepo, 'newPlayer'));

    app.use('/:teamid/edit',
        getPlayerMW(objRepo),
        renderMW(objRepo, 'modPlayer'));

    app.use('/:teamid/del',
        delPlayerMW(objRepo),
        renderMW(objRepo, ':teamid'));

    app.use('/:teamid',
        getPlayersMW(objRepo),
        renderMW(objRepo, ':teamid'));

}