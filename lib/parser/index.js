const answer = require('./answer')
const question = require('./question')
const user = require('./user')

var parser = Object.create(null)

merge(parser, answer)
merge(parser, question)
merge(parser, user)

function merge(to, from) {
    Object.keys(from).forEach(key => {
        to[key] = from[key]
    })
}

module.exports = parser