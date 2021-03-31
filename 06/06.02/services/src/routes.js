const express 	= require( 'express' )
const appRouter = express.Router()

const projects = require( './data' )

appRouter.get( '/services/projects', function( req, res ) {
  res.json({ code: 'success', payload: projects })
})

appRouter.get( '/services/projects/:id', function( req, res ) {
  const project = projects.find( p => p.projectId === parseInt( req.params.id ) )
  res.json({ code: 'success', payload: project })
})

module.exports = appRouter