angular
  .module('kidVids.controllers', [])
  .controller('AppCtrl', [function() {

  }])
  .controller('BrowseCtrl', ['$scope', 'VideosApi', 'videos', function($scope, VideosApi, videos) {
    this.videos = videos;

    this.doRefresh = function() {
      VideosApi.all()
        .then(function(videos) {
          self.videos = videos;
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };
  }])
  .controller('WatchCtrl', ['$sce', 'video', 'ApiUrl', function($sce, video, ApiUrl) {
    this.video = video;
    this.videoUrl = $sce.trustAsResourceUrl(ApiUrl + video.url);
  }]);
