const db = require("../models");

const projectUrls = db.model;

exports.createProject = (req, res) => {
  const projectUrl = new projectUrls({
    title: req.body.title,
    url: req.body.url,
  });
  projectUrl
    .save(projectUrl)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      // console.log();
      res.status(500).send({ message: "Error" || err });
    });
};

exports.findAll = async (req, res) => {
  await projectUrls
    .find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "error" || err });
    });
};

exports.findOne = (req, res) => {
  const id = req.params._id;
  projectUrls
    .findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `not found ` });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({ message: "error" || err });
    });
};

// =============== update =============
exports.update = (req, res) => {
  const id = req.params._id;
  const { title, url } = req.body;
  projectUrls
    .updateOne(
      { _id: id },
      { title: title, url: url },
      { useFindAndModify: false }
    )
    .then(data => {
      if (!title || !url) {
        res.status(401).send({ message: "fields cannot be empty" });
      }
      // else if (!data.data) {
      //   res.status(404).send({ message: `cannot update blog with this ${id}` });
      // }
      res.send({ data: data, message: "updated successfully" });
    })
    .catch(err => {
      res.status(500).send({ message: "Error", err });
    });
};

// ============== delete ===========
exports.deletes = (req, res) => {
  const _id = req.params._id;
  projectUrls
    .deleteOne({ _id: _id })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `cannot delete` });
      } else {
        res.send({ message: "deleted successfully." });
      }
    })
    .catch(err => {
      res.status(401).send({ message: "Error", err });
    });
};
