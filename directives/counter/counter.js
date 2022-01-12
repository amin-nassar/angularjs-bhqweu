export default function () {
  CounterController.$inject = ['$scope', '$rootScope'];

  function CounterController($scope, $rootScope) {
    if (!$rootScope.count) {
      $rootScope.count = 0;
    }
    $scope.increment = function () {
      $rootScope.count = $rootScope.count + 1;
    };
    $scope.decrement = function () {
      $rootScope.count = $rootScope.count - 1;
    };
    $scope.reset = function () {
      $rootScope.count = 0;
    };
  }
  return {
    restrict: 'E',
    scope: true,
    controller: CounterController,
    templateUrl: './counter.html',
  };
}
