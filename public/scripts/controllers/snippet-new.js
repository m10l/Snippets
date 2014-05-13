
angular.module('jsLib').controller( 'SnippetNewCtrl', function ( $scope, $routeParams, $http, $location ) {

	'use strict';

	$scope.snippet = {};

	// CodeMirror Options

	$scope.editorOptions = {
		lineWrapping : true,
		lineNumbers: true,
		styleActiveLine: true,
		matchBrackets: true,
		extraKeys: {
			Tab: false
		},
		mode: 'text/javascript',
		theme: 'solarized dark'
	};

	// Create New Snippet

	$scope.saveSnippet = function () {
		$http.post( '/api/v1/snippets/', $scope.snippet ).success( function() {
			// Confirmation of Save
			$location.path( '/admin' );
		});
	};

	// Cancel Creation of New Snippet

	$scope.cancelSnippet = function () {
		// Confirmation of Cancellation
		$location.path( '/admin' );
	};

});
