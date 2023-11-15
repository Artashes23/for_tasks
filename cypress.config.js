const { defineConfig } = require("cypress");


module.exports = defineConfig({
  env: {
    USERNAME: "standard_user",
    PASSWORD: "secret_sauce",
  },
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    video: true,
    experimentalStudio: true,
  },
});
