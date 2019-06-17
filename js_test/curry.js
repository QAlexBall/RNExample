var curry = require('lodash-fp').curry

var match = curry(function(what, str) {
  return str.match(what)
})

var replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement)
})

var filter = curry(function(f, ary) {
  return ary.filter(f)
})

var map = curry(function(f, ary) {
  return ary.map(f)
})

console.log(match(/\s+/g, "hello world"))

var hasSpaces = match(/\s+/g)

console.log(filter(hasSpaces, ["tori_splling", "tori amos"]))

