(function () {

  document.body.style.margin = 0

  parrot('https://upload.wikimedia.org/wikipedia/commons/d/de/Philosophy-final-state-1907.jpg')
  //parrot('https://upload.wikimedia.org/wikipedia/commons/9/9a/Manjuvajramandala_con_43_divinit%C3%A0_-_Unknown_-_Google_Cultural_Institute.jpg')
  //parrot('https://nyoobserver.files.wordpress.com/2014/02/carra_manifestazione-interventista-gm8.jpg')
  //parrot('https://upload.wikimedia.org/wikipedia/en/c/c4/N._Roerich_-_And_We_are_Trying._From_the_%C2%ABSancta%C2%BB_Series_-_Google_Art_Project.jpg')
  //parrot('https://upload.wikimedia.org/wikipedia/commons/7/73/Repin_Cossacks.jpg')
  //parrot('./yabyum.jpg')
  //parrot('./pic.jpg')

  function parrot (src) {

    var canvas = document.createElement('canvas')
    var context = canvas.getContext('2d')
    document.body.appendChild(canvas)

    resize()
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
      window.requestAnimationFrame(frame)
      function frame () {
        //if (Math.random() > 0.4) redraw()
        redraw()
        window.requestAnimationFrame(frame)
      }
    }

    var f = 0

    function redraw () {

      f++;

      var x1 = Math.random() * img.width
        , y1 = Math.random() * img.height
        , x2 = Math.random() * img.width
        , y2 = Math.random() * img.height
        , w  = x2 - x1
        , h  = y2 - y1

      //context.globalAlpha = 0.5

      if (f % 3 === 0) context.drawImage(img,
        -x1 * canvas.width         / w,
        -y1 * canvas.height        / h,
        img.width  * canvas.width  / w,
        img.height * canvas.height / h);

      if (f % 5 === 0) context.drawImage(img2,
        -x1 * canvas.width         / w,
        -y1 * canvas.height        / h,
        img.width  * canvas.width  / w,
        img.height * canvas.height / h);

      context.globalAlpha = 1
      context.fillStyle = 'black'
      //var data = context.getImageData(0, 0, canvas.width, canvas.height)
      //for (var i = 0; i < data.data.length; i++) {
        //var pixel = data.data[i];
        ////pixel[2] = pixel[1]//;Math.pow(pixel, 1.5)
      //}
      //context.putImageData(data, 0, 0)
      
      //for (var y = 0; y < canvas.height; y++) {
        //if (y % 2 === 0) {
          //context.fillRect(0, y, canvas.width, 1)
        //}
      //}
    }

  }

})
