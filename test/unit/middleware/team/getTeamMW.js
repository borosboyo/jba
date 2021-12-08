var expect = require('chai').expect
var getTeamMW = require('../../../../middleware/team/getTeamMW')

describe('getTeamMW middleware ', function() {

    it('should return team', function (done) {
        const mw = getTeamMW({
            TeamModel: {
                findOne: (p1,cb) =>{
                    expect(p1).to.be.eql({_id: '69'})
                    cb(null,'mockteam')
                }
            }
        })
        const resMock ={
            locals:{}
        }
        mw({
                params:{
                    teamid: '69'
                }
            },
            resMock,
            (err)=>{
                expect(err).to.be.eql(undefined)
                expect(resMock.locals).to.be.eql({team: 'mockteam'})
                done()
            })
    })
    it('should call next with error when there is a db problem', function (done) {
        const mw = getTeamMW({
            TeamModel: {
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
                    teamid: '69'
                }
            },
            resMock,
            (err)=>{
                expect(err).to.be.eql('dberror')
                done()
            })
    })
    it('should return team', function (done) {
        const mw = getTeamMW({
            TeamModel: {
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
                    teamid: '69'
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