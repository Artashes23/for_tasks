const { defineConfig } = require("cypress");


module.exports = defineConfig({
  env: {
    USERNAMEENV: "standard_user",
    PASSWORDENV: "secret_sauce",
    USER_AGENT: "iphone-8"
  },
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    video: true,
    experimentalStudio: true,
  },
});
