var mapItController = ['$scope', function(scope) {
	var mapOptions = {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	}

	scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
	scope.test = 'Hello World!'
}];

mapIt.controller('mapItController', mapItController);