const express = require("express");
const router = express.Router();
const uploadAvatar = require("../middlewares/uploadAvatar");
const {
	signUpUser,
	loginUser,
	logoutUser,
	getCurrentUser,
	auth,
	updateAvatar,
	verify,
	reVerify,
} = require("../controller/user");

router.post("/signup", signUpUser);

router.get("/verify/:verificationToken", verify);

router.post("/verify", reVerify);

router.post("/login", loginUser);

router.post("/logout", auth, logoutUser);

router.get("/current", auth, getCurrentUser);

router.patch("/avatars", auth, uploadAvatar, updateAvatar);

module.exports = router;
