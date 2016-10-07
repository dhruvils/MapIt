var mapItController = ['$scope', 'location', 'locSearch', function(scope, location, locSearch) {
	scope.mapOptions = {
		center: location(),
		zoom: 5
	}
	scope.map = new google.maps.Map(document.getElementById('map'), scope.mapOptions);

	scope.button_click = function() {
		locSearch.getCoordinates(scope.test).then(function(data){
			scope.map.setCenter(data);
			scope.map.setZoom(10);
		}, function(error) {
			console.log('FAILED - LOCATION COORDINATES SERVICE: ' + error);
		});
	}
}];

mapIt.controller('mapItController', mapItController);