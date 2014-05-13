
'use strict';

/**
 * Module Dependencies
 */

var express = require('express');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');

/**
 * Configuration
 * - Application
 */

var app = express();

app.configure( function(){

	app.use( express.json() );
	app.use( express.urlencoded() );
	app.use( express.methodOverride() );
	app.use( app.router );
	app.use( express.static( path.join( __dirname, 'public' ) ) );
	app.use( express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}) );

	console.log('\n==================================================\n');
	console.log('Snippets API V1');
	console.log('\n==================================================\n');

});

/**
 * Configuration
 * - MongoDB
 */

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/snippets';
var port = process.env.PORT || 4242;

mongoose.connect( mongoUri );

mongoose.connection.on('error', function(err) {
	console.log('✘ Error connecting to MongoDB - ' + err);
	process.exit();
});

mongoose.connection.on('connected', function() {
	console.log('✔ Connected to MongoDB');
	app.listen( port );
	console.log( '✔ ︎API running on localhost:' + port );
});

/**
 * Bootstrap 
 * - Controllers
 */

var controllersPath = __dirname + '/controllers';
var controllerFiles = fs.readdirSync(controllersPath);

controllerFiles.forEach( function (file) {
	require(controllersPath+'/'+file)(app);
});
