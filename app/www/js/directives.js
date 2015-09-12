angular
  .module('kidVids.directives', [])
  .directive('videoPlayer', function() {
    return {
      restrict: 'EA',
      templateUrl: 'templates/video-player.html'
    };
  });
