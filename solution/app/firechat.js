var firebase = angular.module("firechat", ["firebase"]);

firebase.controller("myController", ["$scope","$firebaseArray",function($scope,$firebaseArray){

    var db = new Firebase("https://brilliant-heat-5654.firebaseio.com/");

    $scope.messages = $firebaseArray(db);

    $scope.addMessage = function(e){
      if (e.keyCode === 13 && $scope.content) {
        // set anonymous
        var username = $scope.username || "anonymous";
        // add message to messages
        $scope.messages.$add({
          username: username,
          content: $scope.content
        });
        // reset the content
        $scope.content = "";
      }
  };
}]);