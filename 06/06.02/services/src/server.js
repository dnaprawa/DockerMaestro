const express = require( 'express' )
const app = express()
const cors = require( 'cors' )

const port = process.env.PORT || 8080

function stopServer() {
  console.log( 'stopping server...' )
  server.close(function (err) {
    if( err ) {
      console.error( err )
      process.exit( 1 )
    }

    process.exit( 0 )
  })
}

process.on( 'SIGINT', stopServer )
process.on( 'SIGTERM', stopServer )

app.use( cors() )
app.use( (req, res, next ) => {
  console.info( `${req.method} ${req.url}` )
  next()
})

const server = app.listen(port, function() {
  console.log( `Listening on port: ${port}` )
})

// This is somewhat of a hack and should be 
// handle better in a production server.
server.on( 'connection', socket => socket.unref() )


app.use( require( './routes.js' ) )
