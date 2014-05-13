'use strict';

angular.module( 'jsLib', [ 'ngRoute', 'ngAnimate', 'ui.codemirror' ])
	.config( function ($routeProvider) {

		$routeProvider

			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})

			.when('/admin', {
				templateUrl: 'views/admin.html',
				controller: 'AdminCtrl'
			})

			.when('/snippet', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})

			.when('/snippet/edit/:snippetId', {
				templateUrl: 'views/snippet-edit.html',
				controller: 'SnippetEditCtrl'
			})

			.when('/snippet/new', {
				templateUrl: 'views/snippet-new.html',
				controller: 'SnippetNewCtrl'
			})

			.otherwise({
				redirectTo: '/'
			});

	});