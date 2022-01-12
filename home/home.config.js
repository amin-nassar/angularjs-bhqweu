function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('home', {
    url: '/',
    controller: 'HomeCtrl',
    templateUrl: 'home/home.html',
  });
}

export default HomeConfig;
