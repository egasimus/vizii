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
  //context.fillStyle = 'black'
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
