import angular from 'angular';

// The Module
let fetchModule = angular.module('fetch', []);

// Router Config
import FetchConfig from './fetch.config';
fetchModule.config(FetchConfig);

// Controller
import FetchController from './fetch.controller';
fetchModule.controller('FetchController', FetchController);

export default fetchModule;
