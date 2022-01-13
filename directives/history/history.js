export default function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './history.html',
    controller: HistoryController,
  };
  HistoryController.$inject = ['$scope', 'historyService'];
  function HistoryController($scope, historyService) {
    updateHistory();
    function updateHistory() {
      $scope.history = historyService.history;
    }
    $scope.clear = function () {
      historyService.clear();
      updateHistory();
    };
  }
}
