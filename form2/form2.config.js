function FormTwoConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('form2', {
    url: '/form2',
    controller: 'FormTwoController',
    templateUrl: 'form2/form2.html',
  });
}

export default FormTwoConfig;
