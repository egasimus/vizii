(function resize () {
  var canvas = _.state.get('canvas')
  canvas.width  = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
})
