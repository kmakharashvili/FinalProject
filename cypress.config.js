const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://testzootopia.loremipsum.ge/ka",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
