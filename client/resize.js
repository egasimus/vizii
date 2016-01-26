(function resize () {
  var canvas = _.state['canvas']()
  console.log("resize:", canvas.offsetWidth, canvas.offsetHeight)
  canvas.width  = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
})
