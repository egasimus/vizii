(function () {

  // https://github.com/Raynos/main-loop
  // needs to be passed the three methods from virtual-dom
  var mainloop = require('main-loop')(_.state(), render,
    { create: require('virtual-dom/create-element')
    , diff:   require('virtual-dom/diff')
    , patch:  require('virtual-dom/patch') });

  // updates DOM when state updates, but not too often
  // which is kind of the whole point of main-loop
  _.state(function (state) { mainloop.update(state) });

  // this is inflexible: the contents of this function can't be readily
  // livecoded because it's part of a file that's evaluated only once.
  // you can freely edit templates/control.js thought.
  function render (state) { return _.templates.control(state) }

  // add the mainloop-managed element to the cleared document
  document.body.innerHTML = "";
  document.body.appendChild(mainloop.target);

  // in case anyone needs it...
  return mainloop;

})
