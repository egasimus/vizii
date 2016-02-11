require('riko-api/server')(function () {
  return {
    "subscribe": function (cb) {
      if (cb) $.state(function (state) { cb(JSON.stringify(state)) })
      return JSON.stringify($.state())
    },
    "set": function (property, value) {
      $.state.put(property, value)
    }
  }
})
