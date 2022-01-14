FetchController.$inject = ['$scope', '$http', '$stateParams'];
export default function FetchController($scope, $http, $stateParams) {
  const mainEndpoint = 'https://jsonplaceholder.typicode.com';
  const resultLimit = $stateParams.limit || 5;
  $scope.fetchResult = [];
  $scope.fetchRes = function (resource) {
    $http({
      method: 'GET',
      url: `${mainEndpoint}/${resource}`,
    }).then(function successCallback(response) {
      const wantedData = response.data.slice(0, resultLimit);
      $scope.fetchResult = wantedData;
    });
  };
}
