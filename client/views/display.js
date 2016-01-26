(function () {

  var state = $.state();

  // create canvas and add to document
  var canvas = state.canvas;
  document.body.insertBefore(canvas, document.body.firstChild);
  document.body.style.margin = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  $.resize();

  // add font css and draw text
  $.state.put("css", $.util.insertCss(""))
  console.log($.state.css())
  var text = document.createElement('div')
  text.innerText = "the quick brown fox jumps over the lazy dog"
  text.style.position = 'absolute';
  text.style.top = "23%"
  text.style.fontSize = '42px'
  text.style.fontFamily = 'blackcasperregular'
  document.body.insertBefore(text, canvas)

  // resize canvas on window resize, but not too often
  $.util.throttle("resize", "optimizedResize")
  window.addEventListener('optimizedResize', function () { $.resize(); })

  // load image and start rendering
  var src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Philosophy-final-state-1907.jpg";
  var img = document.createElement('img')
  img.src = state.src;
  $.state.put("img", img)

  // start rendering
  $.start()

})
