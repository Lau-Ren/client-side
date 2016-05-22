var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/coordinates/37.795517,-122.393693', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body.map_url)
  document.body.innerHTML = example({ name: data.body.map_url });
})

