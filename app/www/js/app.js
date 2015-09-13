// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('kidVids', ['ionic', 'kidVids.services', 'kidVids.controllers'])
  .constant('ApiUrl', 'http://10.0.1.27')
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl as vm'
    })

    .state('app.browse', {
      url: '/browse',
      resolve: {
        videos: ['VideosApi', function(VideosApi) {
          return VideosApi.all().then(function(videos) {
            return videos;
          });
        }]
      },
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: 'BrowseCtrl as vm'
        }
      }
    })

    .state('app.watch', {
      url: '/watch/:id',
      resolve: {
        video: function($stateParams, VideosApi) {
          var id = parseInt($stateParams.id, 10);

          return VideosApi.find(id).then(function(video) {
            return video;
          });
        }
      },
      views: {
        'menuContent': {
          templateUrl: 'templates/watch.html',
          controller: 'WatchCtrl as vm'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/browse');
  });
