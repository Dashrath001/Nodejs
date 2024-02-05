const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDelteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

router.route("/", handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDelteUserById);

module.exports = router;
