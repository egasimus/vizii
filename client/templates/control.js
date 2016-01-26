(function (state) {

  console.log(state)

  var h = $.h;

  return h('.app',
    [ h('label',
      [ "image"
      , h('input', { value: state.img ? state.img.src : "" })])
    , h('br')

    , h('label',
      [ "frame"
      , h('input', { value: state.frame }) ])
    , h('br')

    , h('label',
      [ "blend"
      , h('input',
          { type: 'range'
          , value: state.blend
          , min: 0
          , max: 1
          , step: 0.01
          , onchange: $.emit('set', 'blend') })])
    , h('br')

    , h('label',
      [ "css"
      , h('textarea', { rows: 25, cols: 80, onchange: $.emit('set', 'font') }, state.font) ])
      
    ])

})
