var expect = require('chai').expect
var savePlayerMW = require('../../../../middleware/player/savePlayerMW')
const getPlayerMW = require("../../../../middleware/player/getPlayerMW");

describe('savePlayerMW middleware ', function () {

    it('should set res.locals.player with a player object from db', function (done) {
        const mw = savePlayerMW({
            PlayerModel : 'xd'
        })
        mw({
                body: {
                    name: 'bananajoe',
                    position: 'center',
                    ppg: '69',
                    trb: '69',
                    ast: '69',
                    mpg: '69'
                },
                params: {
                    playerid: '69'
                }
            },
            {
                locals: {
                    team: {
                        _id: 'teamid'
                    },
                    player:{
                        save:(cb) =>{
                            cb(null)
                        }
                    }
                },
                redirect: (where) => {
                    expect(where).to.be.eql('/players/teamid')
                    done()
                }
            },
            (err) => {
                //no next
            })
    })
    it('should call next with err if there is a db error', function (done) {
        const mw = savePlayerMW({
            PlayerModel : 'xd'
        })
        mw({
                body: {
                    name: 'bananajoe',
                    position: 'center',
                    ppg: '69',
                    trb: '69',
                    ast: '69',
                    mpg: '69'
                },
                params: {
                    playerid: '69'
                }
            },
            {
                locals: {
                    team: {
                        _id: 'teamid'
                    },
                    player:{
                        save:(cb) =>{
                            cb('dberror')
                        }
                    }
                },
                redirect: (where) => {
                }
            },
            (err) => {
                expect(err).to.be.eql('dberror')
                done()
            })
    })
    it('should set res.locals.player with a player object created by the MW', function (done) {
        class PlayerMockModel{
            save(cb){
                cb(null)
            }
        }
        const mw = savePlayerMW({
            PlayerModel : PlayerMockModel
        })
        mw({
                body: {
                    name: 'bananajoe',
                    position: 'center',
                    ppg: '69',
                    trb: '69',
                    ast: '69',
                    mpg: '69'
                },
                params: {
                    playerid: '69'
                }
            },
            {
                locals: {
                    team: {
                        _id: 'teamid'
                    },
                },
                redirect: (where) => {
                    expect(where).to.be.eql('/players/teamid')
                    done()
                }
            },
            (err) => {
                //no next
            })
    })
})