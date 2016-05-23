var xhr = require('xhr')
var sat = require('./views/sat.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function(err, data) {
  if (err) console.log(err) // do something
  var sat = JSON.parse(data.body)
  console.log(sat)
  console.log("25544")
  document.body.innerHTML = sat(sat)
})

