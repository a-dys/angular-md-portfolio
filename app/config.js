System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app/*": "src/*.js",
    "material-start/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "material-start/boot/boot",
      "material-start/app",
      "material-start/projects/Projects",
      "material-start/projects/services/ProjectsDataService",
      "material-start/AppController",
      "github:angular/bower-material@master.js",
      "github:angular/bower-material@master/index.js",
      "github:angular/bower-material@master/angular-material.js",
      "github:angular/bower-angular-aria@1.5.8.js",
      "github:angular/bower-angular-aria@1.5.8/angular-aria.js",
      "github:angular/bower-angular@1.5.8.js",
      "github:angular/bower-angular@1.5.8/angular.js",
      "github:angular/bower-angular-animate@1.5.8.js",
      "github:angular/bower-angular-animate@1.5.8/angular-animate.js"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.8",
    "angular-animate": "github:angular/bower-angular-animate@1.5.8",
    "angular-aria": "github:angular/bower-angular-aria@1.5.8",
    "angular-material": "github:angular/bower-material@master",
    "angular-messages": "github:angular/bower-angular-messages@1.5.8",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.8",
    "css": "github:systemjs/plugin-css@0.1.33",
    "json": "github:systemjs/plugin-json@0.1.2",
    "text": "github:systemjs/plugin-text@0.0.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "github:angular/bower-angular-animate@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-aria@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-messages@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.5.8",
      "angular-animate": "github:angular/bower-angular-animate@1.5.8",
      "angular-aria": "github:angular/bower-angular-aria@1.5.8",
      "angular-messages": "github:angular/bower-angular-messages@1.5.8",
      "css": "github:systemjs/plugin-css@0.1.33"
    }
  }
});
