var tasks = []

var addFn1 = task => { tasks.push(task) }

var flush = () => { tasks.map(task => { task() }) }

setTimeout(() => { flush() })

var dispatch = name => { 
  tasks.map(item => {
    if (item.name === name) {
      item.handler()
    }
  })
}

demoTask = {
  name: 'demo',
  handler: () => { console.log("hello")}
}

let testAsync = async () => "hello wrold!"
let result = testAsync()
console.log(result)


