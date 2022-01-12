export default function () {
  return {
    restrict: 'E',
    scope: {
      link: '=',
    },
    link: function (_, element) {
      element[0].onmouseenter = function () {
        element[0].classList.add('show');
      };
      element[0].onmouseleave = function () {
        element[0].classList.remove('show');
      };
    },
    replace: true,
    controller: () => {},
    templateUrl: './link.html',
  };
}
