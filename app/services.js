mapIt.service('location', [function() {
	return function() {
		var data = {
			lat: 0, 
			lng: 0
		};
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				data.lat = position.coords.latitude;
				data.lng = position.coords.longitude;
			});
		}
		
		return data;
	}
}]);

mapIt.service('locSearch', ['$q', function($q) {
	var geocoder = new google.maps.Geocoder();
	var data = {
		lat: 0,
		lng: 0
	};

	this.getCoordinates = function(loc) {
		var d = $q.defer();
		geocoder.geocode({'address': loc}, function(results, status) {
			if (status === 'OK') {
				d.resolve(results[0].geometry.location);
			} else {
				console.log("GEOCODE FAILED: " + status);
				d.resolve(data);
			}
		});
		return d.promise;
	};
}]);