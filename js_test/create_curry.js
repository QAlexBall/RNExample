function createCurry(func, args) {
  var arity = func.length
  var args = args || []

  return function() {
    var _args = [].slice.call(arguments)
    _args.push(args)

    if (_args.length < arity) {
      return createCurry.call(this, func, _args)
    }

    return func.apply(this, _args)
  }
}

function add(a, b, c) {
  return a + b + c
}

var _add = createCurry(add)
var _add_10 = _add(10)
var _add_10_20 = _add(10)(20)()
console.log(_add_10(1, 2, 3))

var add = a => b => c => a + b + c

var _add_10 = add(10)
var _add_10_20 = add(10)(20)
console.log(_add_10(20)(30))
console.log(_add_10_20(30))
