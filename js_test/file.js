var fs = require('fs')

var readFile = () => {
  fs.readFile(__dirname + '/info.js', "utf8", (err, data) => {
    console.log(data)
  })

  // var dataSync = fs.readFileSync('./app.js', "utf8")
  // console.log(dataSync)
  console.log(__dirname)
}

readFile()


