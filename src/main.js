(function (app) {

  console.log(app)

  _.resize()
  _.util.throttle("resize", "optimizedResize")
  window.addEventListener('optimizedResize', function () { _.resize() });

  _.resize()
  _.init()

})
