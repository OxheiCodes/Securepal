import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router(); // this is the router object that will be used to define the routes

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router; // this exports the router object to be used in the server.js file