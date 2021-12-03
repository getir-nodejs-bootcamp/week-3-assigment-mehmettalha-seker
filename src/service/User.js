let dummy = require("../db/dummy-db");

const getUser = () => {
  return new Promise((resolve, reject) => {
    console.log("Getting all users");
    setTimeout(() => {
      resolve(dummy);
    }, 1000);
  });
};

const postUser = (data) => {
  console.log(`Posting user: ${data.name}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userWithId = { id: dummy.length + 1, ...data };
      dummy.push(userWithId);
      resolve(dummy);
    }, 1200);
  });
};

const patchUser = (id, data) => {
  console.log("Manipulating user with id: ", id);
  id = parseInt(id)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dummy.find((user) => {
        if (user.id == id) {
          dummy.splice(dummy.indexOf(user), 1);
          let newUser = { id, ...data };
          dummy.push(newUser);
          resolve(dummy);
        }
      });
    }, 1300);
  });
};

const putUser = (id, data) => {
  console.log("Manipulating user with id: ", id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dummy.find((user) => {
        if (user.id == id) {
          dummy.splice(dummy.indexOf(user), 1);
          let newUser = { id, ...data };
          dummy.push(newUser);
          resolve(dummy);
        }
      });
    }, 1300);
  });
};

const deleteUser = (id) => {
  console.log("Deleting user with id: ", id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dummy = dummy.filter((user) => user.id != id);
      resolve(dummy);
    }, 1300);
  });
};

module.exports = {
  getUser,
  postUser,
  patchUser,
  putUser,
  deleteUser,
};
