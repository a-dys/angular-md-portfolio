/**
 * Main App Controller for the Angular Material Starter App
 * @param ProjectsDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(ProjectsDataService, $mdSidenav, $mdBottomSheet, $log) {
    var self = this;

    self.selected = null;
    self.projects = [];

    // Load all registered users

    ProjectsDataService
        .loadAllProjects()
        .then(function (projects) {
            self.projects = [].concat(projects);
            self.selected = projects[0];
        });
}
  
export default [ 'ProjectsDataService', '$mdSidenav', '$mdBottomSheet', '$log', AppController ];

