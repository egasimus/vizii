(function (app) {

  // instantiate a new view which watches the state for changes
  var view = $.util.riko.V($.state, $.templates.control)

  // replace document contents with the view's target element
  document.body.innerHTML = "";
  document.body.appendChild(view.target);

  // also update DOM when templates have been edited
  app.nodes['templates'].nodes['control.js'].events.on('edited',
    function (evt) { view.update(_.state()) })

  // in case anyone needs it...
  return view;

})
