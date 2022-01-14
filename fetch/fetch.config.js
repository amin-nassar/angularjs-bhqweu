function FetchConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('fetch', {
    url: '/fetch/:limit',
    controller: 'FetchController',
    templateUrl: 'fetch/fetch.html',
  });
}

export default FetchConfig;
