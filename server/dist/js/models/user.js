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
        required: true,
    },
    lastName: {
        type: String,
        default: null,
        required: true,
    },
    goal: {
        type: String,
        default: null,
        required: true,
    },
    height: {
        type: Number,
        default: null,
        required: true,
    },
    weight: {
        type: Number,
        default: null,
        required: true,
    },
    city: {
        type: String,
        default: null,
        required: true,
    },
    age: {
        type: Number,
        default: null,
        required: true,
    },
    registeredAt: {
        type: String,
        default: null,
        required: true,
    },
    gender: {
        type: String,
        default: null,
        required: true,
    }
}, { timestamps: true });
exports.default = mongoose_1.model("users", userSchema);
