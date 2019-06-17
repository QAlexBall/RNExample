var obj = {
  name: "hello"
}

var func = () => { console.log(this.name) }

function func1() {
  console.log(this.name)
}


func.call(obj)
func1()
func1.call(obj)

var a = 11
function test() {
  this.a = 22
  let b = function() {
    console.log(this.a)
  }
  b()
}

test()

function test1() {
  this.a = 22
  let b = () => { console.log(this.a) }
  b()
}

test1()

var add = (x=20, y=30) => x + y

console.log(add(2))

