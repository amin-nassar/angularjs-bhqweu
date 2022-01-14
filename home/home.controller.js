HomeCtrl.$inject = ['$scope', '$state', '$transitions', 'historyService']
export default function HomeCtrl($scope, $state, $transitions, historyService) {
  $scope.title = "AngularJS Task";
  $scope.goto = function(stateName){
    if(stateName === 'fetch') $state.go('fetch', {limit: 5});
    else $state.go(stateName);
  }
  $transitions.onEnter({}, function (trans) {
    const state = trans._targetState._identifier;
    const history = historyService.history;
    const lastState = history[history.length - 1];
    if(state !== lastState) historyService.add(state);
  });
}

export default HomeCtrl;