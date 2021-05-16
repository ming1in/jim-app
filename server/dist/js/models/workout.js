"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const workoutSchema = new mongoose_1.Schema({
    exercises: {
        type: Array,
        required: true
    },
    isFavorited: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true
    },
    completedAt: {
        type: String
    },
    title: {
        type: String
    }
}, { timestamps: true });
exports.default = mongoose_1.model("workout", workoutSchema);
