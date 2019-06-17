/*
function foo() {
  return () => {
    return () => {
      return () => {
        console.log("id:", this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()();
var t2 = f().call({id: 3})();
var t3 = f()().call({id: 4})
  */
function foo() {
  var a = 10;

  function fn1() {
    return a;
  }

  function fn2() {
    return 10;
  }

  fn2()
}

console.log(foo())

var array = [1, 3, 'h', 5, 'm', '4']
getNumbers = array => {
  var res = []
  array.forEach(item => {
    if (typeof item === 'number') {
      res.push(item)
    }
  })
  return res
}

console.log(getNumbers(array))

add = (a, b, c) => a + b + c
_add = a => b => c => a + b + c
console.log(add(1, 2, 3))
console.log(_add(1)(2)(3))

  /*
function createCurry(func, args) {
  var arity = func.length
  var args = args || []

  return function() {
    // var _args = [].slice.call(arguments)
    var _args = [...arguments]
    [].push.apply(_args, args)

    if (_args.length < arity) {
      return createCurry.call(this, func, _args)
    }

    return func.apply(this, _args)
  }
}
*/

function getNewArray(array) {
  return array.map(function(item) {
    return item * 100 + '%'
  })
}

console.log(getNewArray([1, 2, 0.12]))

function _map(func, array) {
  return array.map(func)
}

var _getNewArray = createCurry(_map)


