const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    //baseUrl: 'https://www.amazon.com/',
    viewportHeight: 700,
    viewportHeight: 650,
    experimentalStudio: true,
  },
});
