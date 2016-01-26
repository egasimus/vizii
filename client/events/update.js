(function (data) {

  console.log("update", data)

  data = JSON.parse(data);

  Object.keys(data).forEach(function (key) {
    var val = data[key];
    $.state.put(key, val);
  })

  $.state.img().src = $.state.src()
  if ($.state.css().textContent !== $.state.font()) {
    console.log("set font")
    $.state.css().textContent = $.state.font();
  }

})
