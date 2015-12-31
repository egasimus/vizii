(function img (src, cb) {

  var i = document.createElement('img')
  i.src = src;
  i.onload = cb;

})
