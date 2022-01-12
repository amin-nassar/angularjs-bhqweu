HomeCtrl.$inject = ['$scope', '$state']
export default function HomeCtrl($scope, $state) {
  $scope.title = "AngularJS Task";
  $scope.goto = function(stateName){
    $state.go(stateName);
  }
}

export default HomeCtrl;