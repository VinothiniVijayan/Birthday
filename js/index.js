var app = angular.module('sampleApp',['onsen','ngTouch','ngSanitize','ngAnimate']);

app.controller('sampleCtrl',['$scope',function($scope){
   console.log("Sample");
}])