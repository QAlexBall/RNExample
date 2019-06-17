(function () {
  var a = 10
  var b = 20

  var test = {
    m: 20, 
    add: x => a + x,
    sum: () => a + b + this.test.m,
    sum1: function() {
      return a + b + this.m
    },
    sum2: () => {
      return a + b + this.m
    }
  }
  window.test = test
})()
console.log(this)
test.add(100)
test.sum()


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
var t3 = f()().call({id: 4});
