(function (app) {
  var web     = require('glagol-web')
    , resolve = require('path').resolve
    , client  = web.app({}, resolve(__dirname, '..', 'client'))
    , host    = $.options.host
    , port    = $.options.port
    , routes  = [ web.route('/',        client)
                , web.route('/control', client) ]
    , server  = web.server(host, port, routes);

  server.http.on('listening', function () {
    console.log('open ' + host + ':' + port + ' in your browser')
  })

  server.sockets.on("connection", function (socket) { $.connect(socket) });

  return server;
})
