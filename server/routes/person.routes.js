const PersonController = require("../controllers/Person.controller");

module.exports = (app) => {
  app.get("/api", PersonController.index);
};
