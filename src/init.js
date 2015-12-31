(function init (src) {

  var canvas = document.createElement('canvas')
  var context = canvas.getContext('2d')
  document.body.appendChild(canvas)

  _.resize()
  window.addEventListener('optimizedResize', resize)
  function resize () {
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  var img = document.createElement('img')
  img.src = src
  img.onload = function () {
    var img2 = document.createElement('img')
    img2.src = './pic.jpg'
    img2.onload = start;
  }
  
  function start () {
    window.requestAnimationFrame(_.frame)
  }

})
