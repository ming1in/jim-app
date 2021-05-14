"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/users/auth");
const index_1 = require("../controllers/users/index");
const index_2 = require("../controllers/seed/index");
const index_3 = require("../controllers/workout/index");
const router = express_1.Router();
router.get("/users", index_1.getUsers);
router.post("/edit-user/:id", index_1.updateUser);
router.post("/auth/signup", auth_1.signUp);
router.post("/auth/login", auth_1.login);
router.post("/auth/register", auth_1.register);
router.get('/seed/workout', index_2.seedWorkout);
router.get("/exercises", index_3.getExercises);
exports.default = router;
