(function (app) {

  console.log(app)

  _.util.throttle("resize", "optimizedResize")
  window.addEventListener('optimizedResize', function () { _.resize() })

  _.init()

})
