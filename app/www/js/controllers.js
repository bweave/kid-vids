angular
  .module('kidVids.controllers', [])
  .controller('AppCtrl', [function() {

  }])
  .controller('BrowseCtrl', ['Videos', function(Videos) {
    var self = this;

    Videos.all().then(function(videos) {
      self.videos = videos;
    });
  }])
  .controller('WatchCtrl', ['$sce', 'video', function($sce, video) {
    this.video = video;
    this.videoUrl = $sce.trustAsResourceUrl(video.url);
  }]);
