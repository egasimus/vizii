(function init (src) {

  var img = document.createElement('img')
  img.src = src
  _.state.put("img", img)
  img.onload = _.start

})
