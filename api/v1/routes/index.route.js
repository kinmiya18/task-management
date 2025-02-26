const TaskRoutes = require("./task.route");

const routerV1 = (app) => {
  const version = "/api/v1";
  app.use(version + "/tasks", TaskRoutes);
};

module.exports = routerV1;
