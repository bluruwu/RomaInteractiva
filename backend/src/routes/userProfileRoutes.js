const express = require("express");
const router = express.Router();
const { updateUserProfile } = require("../controllers/userProfileController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.put("/actualizarperfil", verifyToken, updateUserProfile);

module.exports = router;
