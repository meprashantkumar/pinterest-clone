import express from "express";
import {
  followAndUnfollowUser,
  logOutUser,
  loginUser,
  myProfile,
  registerUser,
  userProfile,
} from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuth, logOutUser);
router.get("/me", isAuth, myProfile);
router.get("/:id", isAuth, userProfile);
router.post("/follow/:id", isAuth, followAndUnfollowUser);

export default router;
