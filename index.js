var xhr = require('xhr')
var sat = require('./views/sat.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544/positions', function(err, data) {
  if (err) console.log(err) // do something
  var sat = JSON.parse(data.body)
  console.log(sat)
  console.log("sat positions")
  document.body.innerHTML = sat({ sat: sat });
})

