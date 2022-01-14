import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home';
import './form1';
import './form2';
import './fetch';
// Services
import historyService from './historyService';

// Directives
import navLinksDirective from './directives/navLinks/navLinks';
import navBarDirective from './directives/navBar/navBar';
import menuDirective from './directives/menu/menu';
import linkDirective from './directives/link/link';
import listDirective from './directives/list/list';
import historyDirective from './directives/history/history';
import themeDirective from './directives/theme/theme';
import counterDirective from './directives/counter/counter';

// Create and bootstrap application
const requires = ['ui.router', 'fetch', 'form1', 'form2', 'home'];

window.app = angular.module('app', requires);
app.config(($locationProvider) => {
  $locationProvider.html5Mode(true);
});

app.service('historyService', historyService);

// Directives
app.directive('navLinks', navLinksDirective);
app.directive('navBar', navBarDirective);
app.directive('counter', counterDirective);
app.directive('menu', menuDirective);
app.directive('list', listDirective);
app.directive('link', linkDirective);
app.directive('history', historyDirective);
app.directive('theme', themeDirective);

angular.bootstrap(document.getElementById('app'), ['app']);
