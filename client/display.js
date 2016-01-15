(function () {

  _.util.throttle("resize", "optimizedResize")
  window.addEventListener('optimizedResize', function () { _.resize(); })

  var canvas = _.state()['canvas'];
  document.body.insertBefore(canvas, document.body.firstChild);
  document.body.style.margin = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  _.resize();

  var src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Philosophy-final-state-1907.jpg";
  var img = document.createElement('img')
  img.src = src
  _.state.put("img", img)
  img.onload = _.start

})
