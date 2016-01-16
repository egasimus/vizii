(function (app) {

  console.log(app)

  switch (window.location.pathname) {
    case "/":        _.display();    break;
    case "/control": _.control(app); break;
  }

})
