"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedWorkout = void 0;
const exercises_json_1 = __importDefault(require("./exercises.json"));
const exercise_1 = __importDefault(require("../../models/exercise"));
const seedWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const exercises = exercises_json_1.default;
    exercises.forEach(function (value) {
        return __awaiter(this, void 0, void 0, function* () {
            const temp = new exercise_1.default(value);
            yield temp.save();
        });
    });
});
exports.seedWorkout = seedWorkout;
