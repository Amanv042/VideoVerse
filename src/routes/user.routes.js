import { Router } from "express";

import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCorrectPassword,
  getCurrentUser,
  updateAccountDetails,
  updateAvatar,
  getChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// Secured Routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("change-password").post(verifyJWT, changeCorrectPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router.route("/update-avatar").patch(verifyJWT, updateAvatar);
router.route("/channel/:username").get(verifyJWT, getChannelProfile);
router.route("/watch-history").get(verifyJWT, getWatchHistory);

export default router;
