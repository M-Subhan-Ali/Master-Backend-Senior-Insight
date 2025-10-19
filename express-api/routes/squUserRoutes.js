import express from "express";
import { createUser,getUsers } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/create-sql", createUser);

export {router as SQLUserRouter};
