const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    viewportHeight: 700,
    viewportHeight: 650,
    experimentalStudio: true,
  },
});
