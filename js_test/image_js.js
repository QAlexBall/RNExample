const { Image } = require('image-js')

execute().catch(console.error)

async function execute() {
  let image = await Image.load('./image.png')
  let grey = image
    .grey()
  return grey.save('image1.png')
}
