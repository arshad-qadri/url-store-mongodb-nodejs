const {
  createProject,
  findAll,
  findOne,
  update,
  deletes,
} = require("../controler/controler");

const router = require("express").Router();

module.exports = app => {
  router.post("/url", createProject);
  router.post("/all", findAll);
  router.post("/:_id", findOne);
  router.post("/update/:_id", update);
  router.post("/delete/:_id", deletes);

  app.use("/api", router);
};
