var searchAppControllersModule = angular.module('searchAppControllersModule',
		[ 'searchAppServicesModule' ]);

searchAppControllersModule.controller('searchController', function($scope,
		esClient) {

	$scope.search = {
		query : '',
		results : ''
	};

	$scope.performSearch = function() {
		
		var query = ejs.MatchAllQuery();
		if ($scope.search.query) {
			query = ejs.MatchQuery('name', $scope.search.query);
		}		

		esClient.search({
			index : 'movies',
			body : ejs.Request().query(query)
		}).then(function(response) {			
			$scope.search.results = response.hits.hits;
			//console.log(JSON.stringify(response));
		}, function(error) {
			console.trace(error.message);
		});

	};

	$scope.retrieveSuggestions = function() {
		console.log($scope.search.query)

	};

	$scope.performSearch();

});