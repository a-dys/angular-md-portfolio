// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Projects from 'src/projects/Projects';

export default angular.module( "starter-app", [ 'ngMaterial', Projects.name ] )
    .controller('AppController', AppController);