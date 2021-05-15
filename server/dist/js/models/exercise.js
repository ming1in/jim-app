"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const exerciseSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
}, {
    versionKey: false // remove _v value
});
exports.default = mongoose_1.model("Exercise", exerciseSchema);
