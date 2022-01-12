import angular from 'angular';

// The Module
let formTwoModule = angular.module('form2', []);

// Router Config
import FormTwoConfig from './form2.config';
formTwoModule.config(FormTwoConfig);

// Controller
import FormTwoController from './form2.controller';
formTwoModule.controller('FormTwoController', FormTwoController);

export default formTwoModule;
