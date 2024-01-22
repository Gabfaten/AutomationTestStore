const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {    
      require ('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://automationteststore.com/",    
    viewportHeight: 1080,
    viewportWidth: 1920,
     //screenshots folder will be created by cypress 
     screenshotOnRunFailure: true,
     trashAssetsBeforeRuns: true,//clear screenshot folder before run   
    pageLoadTimeout: 130000,
    reporter:'cypress-mochawesome-reporter',
  },

});
