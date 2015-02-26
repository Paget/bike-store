app.factory('weatherService', ['$http', '$log', function($http, $log) {
  function sanitizeWeather(weather) {
    return {
      temp: weather.main.temp,
      weather: weather.weather[0].main
    };
  }

  return {
    current: function () {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Chapel Hill&units=imperial')
        .then(function (response) {
          console.log(response);
          return sanitizeWeather(response.data);
        })
        .catch(function (error) {
          $log.log(error);
        });
    }
  };
}]);
