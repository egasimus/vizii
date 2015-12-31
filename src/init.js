(function init (src) {

  var img = document.createElement('img')
  img.src = src
  img.onload = function () {
    var img2 = document.createElement('img')
    img2.src = './pic.jpg'
    img2.onload = function start () {
      window.requestAnimationFrame(_.redraw)
    };
  }

})
