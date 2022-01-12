import angular from 'angular';

// The Module
let formOneModule = angular.module('form1', []);

// Router Config
import FormOneConfig from './form1.config';
formOneModule.config(FormOneConfig);

// Controller
import FormOneController from './form1.controller';
formOneModule.controller('FormOneController', FormOneController);

export default formOneModule;
