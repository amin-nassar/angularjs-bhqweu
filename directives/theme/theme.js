export default function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './theme.html',
    controller: function ($scope) {
      $scope.themes = ['purple', 'teal', '#2962ff', 'darkblue'];
      $scope.setTheme = function (theme) {
        const root = document.documentElement;
        root.style.setProperty('--main-color', theme);
      };
    },
  };
}
