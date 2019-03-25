/*
 * 这段代码中，this是被默认绑定到了全局对象上，所以this.a得到是2
 */

// 默认绑定
{
  function foo() {
    var a = 3;
    console.log( this.a );
  }
}

// 隐式绑定
{
  function foo() {
    console.log(this.a);
  }

  var obj = {
    a: 2,
    foo: foo
  }

  var a = "opps, global";
  obj.foo();             // 隐式绑定规则会将函数调用中的this绑定到这个上下文对象 此时this.a
                         // 和obj.a是一样的
  var bar = obj.foo;     // 隐式丢失
  bar();                 // 隐式绑定会出现一个问题，就是隐式丢失。新建一个foo函数的索引bar，
                         // 在最后一行调用的时候，这个函数不具有上下文对象，此时采用默认绑定规则

}

{
  // 绑定修饰也会发生在函数作为参数传递的情况下，即传入回调函数时，因为参数传递就是一种隐式赋值
  function foo() {
    console.log( this.a );
  }
  
  function doFoo(fn) {
    fn();      // 在此处调用，参数传递是隐式赋值，丢失this绑定
  }

  var obj = {
    a: 2,
    foo: foo
  };
  var a = "opps, global";
  doFoo( obj.foo );  // 看似隐式绑定，输出opps，global
}

// 显示绑定
{
  function foo() {
    console.log( this. a );
  }
  var obj = {
    a: 2
  };
  var a = 3;
  foo.call( obj );
}

