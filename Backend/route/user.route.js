import express from "express";
import {
  completeProfile,
  getUserDetail,
  login,
  signup,
} from "../Controller/user.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/completeProfile", authMiddleware, completeProfile);
router.get("/details", authMiddleware,getUserDetail);
export default router;
