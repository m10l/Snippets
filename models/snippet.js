
'use strict';

/**
 * Module Dependencies
 */

var mongoose = require('mongoose');

/**
 * Model
 * - Snippet Model Schema
 */

var SnippetSchema = new mongoose.Schema({

	title: {
		type: String,
		required: true
	},
	description: String,
	snippet: String,
	tags: {
		type: []
	},
	modified: {
		type: Date,
		default: Date.now
	}

});

var SnippetModel = mongoose.model( 'Snippet', SnippetSchema );

module.exports = {
	SnippetModel: SnippetModel
};
