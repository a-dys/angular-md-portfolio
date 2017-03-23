// Load the custom app ES6 modules

import ProjectsDataService from 'src/projects/services/ProjectsDataService';

// Define the Angular 'projects' module

export default angular
  .module("projects", ['ngMaterial'])
   
  .service("ProjectsDataService", ProjectsDataService);
