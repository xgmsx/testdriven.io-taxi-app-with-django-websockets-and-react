const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    env: {
      credentials: {
        username: "maksim.grafskiy@example.com",
        password: "pAssw0rd",
      },
    },
  },
});