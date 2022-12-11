import express from "express";

const router = express.Router()
import { signin, signup } from "../controllers/user.js";

//sends the call for the sign in and sign up
router.post("/signin", signin);
router.post("/signup", signup);

export default router;

