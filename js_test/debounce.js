function debounce(fn, wait) {
  var timer = null;
  return function () {
    var context = this
    var args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(function () {
      fn.apply(context, args)  
    }, wait)
  }
}

var fn1 = function () {
  console.log('boom1')
}

var fn2 = function () {
  console.log('boom2')
}

setInterval(debounce(fn1, 500), 1000)
setInterval(debounce(fn2, 2000), 1000)

setInterval(debounce(fn2, 100), 1000)
setInterval(debounce(fn1, 2000), 1000)
