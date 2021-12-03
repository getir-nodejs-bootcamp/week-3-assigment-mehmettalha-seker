const {
  getUser,
  postUser,
  deleteUser,
  putUser,
  patchUser,
} = require("../service/User");
const httpStatus = require("http-status");

const userGet = (req, res) => {
  getUser()
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

const userPost = (req, res) => {
  postUser(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

const userDelete = (req, res) => {
  deleteUser(req.body.id)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

const userPut = (req, res) => {
  putUser(req.body.id, req.body)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

const userPatch = (req, res) => {
  patchUser(req.body.id, req.body)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

module.exports = {
  userGet,
  userPost,
  userDelete,
  userPut,
  userPatch,
};
