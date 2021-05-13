"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(routes_1.default);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@jim-app.ujtjl.mongodb.net/main?authSource=admin&replicaSet=atlas-ehvnq7-shard-0&readPreference=primary&appname=mongodb-vscode%200.5.0&ssl=true`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
    throw error;
});
