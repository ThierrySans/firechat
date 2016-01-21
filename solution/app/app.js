var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("myController", ["$scope","$firebaseArray",function($scope,$firebaseArray){

    var db = new Firebase("https://brilliant-heat-5654.firebaseio.com/");
    $scope.messages = $firebaseArray(db);

    // add a message
    $scope.addMessage = function(e){
      if (e.keyCode === 13 && $scope.body) {
        // set anonymous
        var username = $scope.username || "anonymous";
        // add message to messages
        $scope.messages.$add({
          from: username,
          body: $scope.body
        });
        // reset the body
        $scope.body = "";
      }
  };

}]);