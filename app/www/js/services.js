angular
  .module('kidVids.services', [])
  .constant('ApiUrl', 'http://localhost:8000')
  .factory('Videos', ['$http', 'ApiUrl', function($http, ApiUrl) {
    var self = this,
        service = {};

    service.all = function() {
      return $http.get(ApiUrl + '/kid-vids')
        .then(function(resp) {
          console.log(resp);
          return resp.data;
        })
        .catch(function(resp) {
          console.log(resp);
          alert('Something went wrong fetching the videos!');
        });
    };

    service.find = function(id) {
      return $http.get(ApiUrl + '/kid-vids/' + id)
        .then(function(resp) {
          console.log(resp);
          return resp.data;
        })
        .catch(function(resp) {
          console.log(resp);
          alert('Something went wrong fetching video: ' + id);
        });
    };

    return service;
  }]);
