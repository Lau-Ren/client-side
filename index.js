var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/coordinates/37.795517,-122.393693', function(err, data) {
  if (err) console.log(err) // do something
  var map = JSON.parse(data.body).map_url
  console.log(map)
  console.log("im updating5")
  document.body.innerHTML = example({ url: map });
})

