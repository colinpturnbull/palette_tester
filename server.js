// modules
var static = require( 'node-static' ),
    port = 8080,
    http = require( 'http' );
    metalsmith = require( 'metalsmith' );

// config
var file = new static.Server( './build' );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen(port, function(){
  console.log('Listening on localhost:8080...')
});
