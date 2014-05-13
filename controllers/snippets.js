
'use strict';

/**
 * Controller
 * - Snippets Controller
 */

var SnippetModel = require('../models/snippet').SnippetModel;

module.exports = function(app) {

	/**
	 * Snippets
	 * - Create New Snippet
	 */
	
	app.post( '/api/v1/snippets', function ( req, res ) {

		console.log('\nNew Snippet Created -');
		console.log( req.body );

		var snippet = new SnippetModel({
			title: req.body.title,
			description: req.body.description,
			snippet: req.body.snippet,
			tags: req.body.tags
		});

		snippet.save(function (err) {
			if (!err) {
				return console.log('\n✔ New Snippet Posted With Great Success!');
			} else {
				return console.log(err);
			}
		});

		return res.send(snippet);

	});

	/**
	 * Snippets
	 * - Read All Snippets
	 */

	app.get( '/api/v1/snippets', function ( req, res ) {

		return SnippetModel.find(function ( err, snippets ) {

			if ( !err ) {
				return res.send(snippets);
			} else {
				return console.log(err);
			}

		});

	});

	/**
	 * Snippets
	 * - Read Single Snippet by ID
	 */
	
	app.get( '/api/v1/snippets/:id', function ( req, res ) {

		return SnippetModel.findById( req.params.id, function ( err, snippet ) {

			if (!err) {
				return res.send(snippet);
			} else {
				return console.log(err);
			}

		});

	});

	/**
	 * Snippets
	 * - Update Single Snippet by ID
	 */
	
	app.put( '/api/v1/snippets/:id', function ( req, res ) {

		return SnippetModel.findById( req.params.id, function ( err, snippet ) {

			snippet.title = req.body.title;
			snippet.description = req.body.description;
			snippet.snippet = req.body.snippet;
			snippet.tags = req.body.tags;

			return snippet.save(function (err) {

				if (!err) {
					console.log( '\nUpdated Snippet ID: ' + req.params.id + ' -' );
					console.log(req.body);
				} else {
					console.log(err);
				}

				return res.send(snippet);

			});

		});

	});

	/**
	 * Snippets
	 * - Delete Single Snippet by ID
	 */
	
	app.delete( '/api/v1/snippets/:id', function ( req, res ) {

		return SnippetModel.findById( req.params.id, function ( err, snippet ) {
			return snippet.remove( function (err) {
				if (!err) {
					console.log( '\nRemoved Snippet ID: ' + req.params.id );
					return res.send('');
				} else {
					console.log(err);
				}
			});
		});

	});

};
