const express = require("express");
const router = express.Router();
const {
	loginUser,
	loginGoogleUser,
	registerUser,
	recoveryPasswordUser,
	currentUser,
	users,
} = require("../controllers/authController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/login", loginUser);
router.post("/logingoogle", loginGoogleUser);
router.post("/register/user", registerUser);
router.post("/sendrecoveryemail", recoveryPasswordUser);
router.get("/currentuser", verifyToken, currentUser);
router.get("/users", users);

module.exports = router;
