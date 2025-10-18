import express from "express";
import { getUsers, createUser } from "../controllers/userControllers.js";
import { createUserValidator } from "../validators/userValidators.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/create", createUserValidator , validateRequest , createUser);

export {router as UserRouter};
