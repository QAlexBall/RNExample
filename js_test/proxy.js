var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log("getting ${key}!")
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    console.log("setting ${key}!")
    return Reflect.set(target, key, value, receiver)
  }
})

obj.count = 1
++obj.count


function loadImageAsync(url) {
  return new Promise (function(resolve, reject) {
    const image = new Image()

    image.onload = function() {
      resolve(image)
    }

    image.onerror = function() {
      reject(new Error('Could not load image at  ' + url))
    }
    image.src = url
  })
}

loadImageAsync("./image")
