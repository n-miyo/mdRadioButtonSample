(function(){
  'use strict';

  function controller($scope, $mdDialog) {
    $scope.data = {};
    $scope.showAlert = function(ev) {
      var d1 = $scope.data.group1 || "(not selected)";
      var d2 = $scope.data.group2 || "(not selected)";
      var s = "group1: " + d1 + " / " + "group2: " + d2;
      $mdDialog.show(
        $mdDialog.alert()
          .content(s)
          .ok('OK')
          .targetEvent(ev)
      );
    };
  };

 angular
 .module('app', ['ngMaterial'])
 .controller('AppCtrl', ['$scope', '$mdDialog', controller]);
})();
