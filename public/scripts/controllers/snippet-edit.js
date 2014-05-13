
angular.module('jsLib').controller( 'SnippetEditCtrl', function ( $scope, $routeParams, $http, $location ) {

	'use strict';

	$scope.snippet = {};

	$http.get( '/api/v1/snippets/' + $routeParams.snippetId ).success( function ( data ) {
		$scope.snippet = data;
		$scope.dataLoaded = true; // For preventing content flash
	});

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

	// Save Changes to Snippet

	$scope.updateSnippet = function () {
		$http.put( '/api/v1/snippets/' + $routeParams.snippetId, $scope.snippet ).success( function() {
			// Confirmation of Save
			$location.path( '/admin' );
		});
	};

	// Remove Snippet

	$scope.deleteSnippet = function () {
		$http.delete( '/api/v1/snippets/' + $routeParams.snippetId ).success( function() {
			// Confirmation of Deletion
			$location.path( '/admin' );
		});
	};

	// Cancel Changes to Snippet

	$scope.cancelSnippet = function () {
		// Confirmation of Cancellation
		$location.path( '/admin' );
	};

});
