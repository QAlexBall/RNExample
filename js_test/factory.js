var createPreson = function(name, age) {
  var o = new Object()

  o.name = name
  o.age = age
  o.getName = function() {
    return this.name
  }

  return o
}

var perTom = createPreson('Tom', 20)
var perJack = createPerson('Jake', 22)


