app.config(['$routeProvider', function ($routeProvider) {
  var routeDefinition = {
    controller: 'BikesCtrl',
    controllerAs: 'vm',
    templateUrl: 'bikes/bikes.html',
    resolve: {
      weather: ['weatherService', function (weatherService) {
        return weatherService.current();
      }]
    }
  };

  $routeProvider.when('/', routeDefinition);
  $routeProvider.when('/bikes', routeDefinition);
}])

.controller('BikesCtrl', ['bikeStore', 'weather', function(bikeStore, weather) {
  var self = this;

  self.all = bikeStore.all;
console.log('weather', weather);
  self.weather = weather;

  self.removeBike = bikeStore.remove;

}]);
