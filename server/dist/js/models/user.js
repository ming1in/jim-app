"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        default: null,
    },
    lastName: {
        type: String,
        default: null,
    },
    goal: {
        type: String,
        default: null,
    },
    height: {
        type: Number,
        default: null,
    },
    weight: {
        type: Number,
        default: null,
    },
    city: {
        type: String,
        default: null,
    },
    age: {
        type: Number,
        default: null,
    },
    registeredAt: {
        type: String,
        default: null,
    },
    gender: {
        type: String,
        default: null,
    }
}, { timestamps: true });
exports.default = mongoose_1.model("users", userSchema);
