mapIt.controller('titleBarController', ['$scope', 'locSearch', function(scope, locSearch) {
	scope.button_click = function() {
		locSearch.getCoordinates(scope.query).then(function(data){
			scope.map.setCenter(data);
			scope.map.setZoom(10);
		}, function(error) {
			console.log('FAILED - LOCATION COORDINATES SERVICE: ' + error);
		});
	}
}]);

mapIt.directive('titleBar', function() {
	return {
		templateUrl: 'app/title-bar/title-bar.html',
		restrict: 'E',
		controller: 'titleBarController'
	};
});