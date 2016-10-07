var titleBarController = function(scope) {
	scope.test = "Hello World";
}

mapIt.controller('titleBarController', ['$scope', function(scope) {
	scope.test = "hello World";
}]);

mapIt.directive('titleBar', function() {
	return {
		templateUrl: 'app/title-bar/title-bar.html',
		restrict: 'E',
		controller: 'titleBarController'
	};
});