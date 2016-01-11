(function (app) {

  var socket = new WebSocket("ws://" + window.location.host)

  console.log(app)

  _.util.throttle("resize", "optimizedResize")
  window.addEventListener('optimizedResize', function () { _.resize() })

  _.init()

})
