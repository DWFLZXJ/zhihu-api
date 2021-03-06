const answer = require('../global/api').answer
const expect = require('../global/expect')

var aid = 32208485

describe('api.answer', function() {
  this.timeout(15000)

  it('Answer(aid)', function() {
    var ans = answer(aid)
    expect(ans).to.have.property('_answer')
    expect(ans._answer).to.have.property('aid')
    expect(ans._answer.aid).to.equal(aid)
  })

  it('answer.voters([next])', function() {
    var voters = answer(aid).voters()
    expect(voters).to.be.a('promise')
    return expect(voters).to.eventually.be.an('object')
  })

  it('answer.comments([page])', function() {
    var comments = answer(aid).comments()
    expect(comments).to.be.a('promise')
    return expect(comments).to.eventually.be.an('object')
  })

  it('Answer.exploreDay([offset])', function() {
    var answers = answer.exploreDay()
    expect(answers).to.be.a('promise')
    return expect(answers).to.eventually.be.an('array')
  })

  it('Answer.exploreMonth([offset])', function() {
    var answers = answer.exploreMonth()
    expect(answers).to.be.a('promise')
    return expect(answers).to.eventually.be.an('array')
  })
})
