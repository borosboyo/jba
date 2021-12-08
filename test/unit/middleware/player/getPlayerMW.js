var expect = require('chai').expect
var getPlayerMW = require('../../../../middleware/player/getPlayerMW')

describe('getPlayerMW middleware ', function() {

    it('should set res.locals.player with a player object from db', function (done) {
        const mw = getPlayerMW({
            PlayerModel: {
                findOne: (p1,cb) =>{
                    expect(p1).to.be.eql({_id: '69'})
                    cb(null,'mockplayer')
                }
            }
        })
        const resMock ={
            locals:{}
        }
        mw({
            params:{
                playerid: '69'
            }
        },
            resMock,
        (err)=>{
            expect(err).to.be.eql(undefined)
            expect(resMock.locals).to.be.eql({player: 'mockplayer'})
            done()
        })
    })
    it('should call next with error when there is a db problem', function (done) {
        const mw = getPlayerMW({
            PlayerModel: {
                findOne: (p1,cb) =>{
                    expect(p1).to.be.eql({_id: '69'})
                    cb('dberror',null)
                }
            }
        })
        const resMock ={
            locals:{}
        }
        mw({
                params:{
                    playerid: '69'
                }
            },
            resMock,
            (err)=>{
                expect(err).to.be.eql('dberror')
                done()
            })
    })
    it('should call next when no player found in the db', function (done) {
        const mw = getPlayerMW({
            PlayerModel: {
                findOne: (p1,cb) =>{
                    expect(p1).to.be.eql({_id: '69'})
                    cb(undefined,null)
                }
            }
        })
        const resMock ={
            locals:{}
        }
        mw({
                params:{
                    playerid: '69'
                }
            },
            resMock,
            (err)=>{
                expect(err).to.be.eql(undefined)
                expect(resMock.locals).to.be.eql({})
                done()
            })
    })
})