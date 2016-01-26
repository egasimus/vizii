(function (property, event) {

  console.log(property, event.target.value);
  require('q').catch($.api("set", property, event.target.value),
    $.error("could not set " + property + " to " + event.target.value));

})
