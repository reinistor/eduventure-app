import express from "express";

//IMPORt ALL CONTROLLERS

import { createUser,getAllUsers, getUserInfoByID } from "../controllers/user.controller.js";

const router = express.Router();
//Creating routes, as many as controllers

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoByID);

export default router;
