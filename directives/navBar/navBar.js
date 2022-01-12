export default function navBarDirective() {
  return {
    restrict: 'E',
    controller: function () {},
    scope: {
      title: '@',
      data: '=',
    },
    templateUrl: './navBar.html',
  };
}
