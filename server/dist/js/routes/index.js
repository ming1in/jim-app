"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/users/auth");
const index_1 = require("../controllers/users/index");
const index_2 = require("../controllers/seed/index");
const router = express_1.Router();
router.get("/users", index_1.getUsers);
router.post("/add-user", index_1.addUser);
router.put("/edit-user/:id", index_1.updateUser);
router.delete("/delete-user/:id", index_1.deleteUser);
router.post('/');
router.post("/auth/signup", auth_1.signUp);
router.post("/auth/login", auth_1.login);
router.post("/auth/register", auth_1.register);
router.get('/seed/workout', index_2.seedWorkout);
exports.default = router;
