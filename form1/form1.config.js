function FormOneConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('form1', {
    url: '/form1',
    controller: 'FormOneController',
    templateUrl: 'form1/form1.html',
  });
}

export default FormOneConfig;
