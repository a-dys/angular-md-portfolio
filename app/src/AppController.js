/**
 * Main App Controller for the Adit App
 * @param ProjectsDataService
 * @constructor
 */
function AppController(ProjectsDataService) {
    var self = this;

    self.selected = null;
    self.projects = [];
    self.contactEmail = "ada.dys@adit.net.pl";

    var audio = new Audio('assets/media/blop.mp3');
    self.playSound = () => {
        console.log("Blop");
        audio.play();
    };
    
    // Load all registered users

    ProjectsDataService
        .loadAllProjects()
        .then(function (projects) {
            self.projects = [].concat(projects);
            self.selected = projects[0];
        });
}
  
export default [ 'ProjectsDataService', AppController ];

