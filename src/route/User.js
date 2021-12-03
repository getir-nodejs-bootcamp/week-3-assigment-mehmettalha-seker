const { userPost, userGet, userDelete, userPatch, userPut } = require("../controller/User");
const express = require("express");
const logger = require("../middleware/logger")
const auth = require("../middleware/auth")


const router = express.Router();

router.route("/").get(logger,userGet)
router.route("/").post(logger,userPost)
router.route("/").delete(auth,logger,userDelete)
router.route("/").patch(auth,logger,userPatch)
router.route("/").put(auth,logger,userPut)

module.exports.UserRouter = router