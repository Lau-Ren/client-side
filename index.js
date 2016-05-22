var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('localhost:3000/v1/colours', function(err, data) {
  if (err) console.log(err) // do something
  var red = JSON.parse(data[0].name)
  console.log(red)
  console.log("colours")
  document.body.innerHTML = colours({ red: red });
})

