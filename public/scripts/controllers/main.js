
angular.module('jsLib').controller( 'MainCtrl', function ( $scope, $http, $location ) {

	'use strict';

	$scope.snippets = {};

	// CodeMirror Options

	$scope.editorOptions = {
		lineWrapping : true,
		lineNumbers: true,
		readOnly: true,
		extraKeys: {
			Tab: false
		},
		mode: 'text/javascript',
		theme: 'solarized dark'
	};

	$http.get('/api/v1/snippets').success( function ( data ) {

		// Append data to our scope's snippet object

		$scope.snippets = data;

		// For preventing content flash
		
		$scope.dataLoaded = true;

		// Prevent input from hogging focus on iOS

		$('.main-wrapper').on( 'click', function() {
			$('#search').blur();
		});

	});

	$scope.newSnippet = function () {
		$location.path( '/snippet/new' );
	};

});
