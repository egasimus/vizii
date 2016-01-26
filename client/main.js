(function (app) {

  console.log(app)

  $.connect();

  switch (window.location.pathname) {
    case "/":        _.views.display();    break;
    case "/control": _.views.control(app); break;
  }

})
