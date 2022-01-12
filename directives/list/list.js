export default function () {
  return {
    restrict: 'E',
    scope: {
      item: '=',
    },
    replace: true,
    controller: () => {},
    templateUrl: './list.html',
  };
}
