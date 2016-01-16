(function (state) {

  var h = $.h;

  return h('.app',
    [ h('label', [ "image", h('input', { value: state.img ? state.img.src : "" })])
    , h('br')
    , h('label', [ "frame", h('input', { value: state.frame }) ]) ])

})
