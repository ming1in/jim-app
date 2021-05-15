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
exports.getWorkout = exports.addWorkout = exports.getExercises = void 0;
const exercise_1 = __importDefault(require("../../models/exercise"));
const workout_1 = __importDefault(require("../../models/workout"));
const getExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const group = req.query.group;
        const exer = yield exercise_1.default.where({ category: group });
        res.status(200).json(exer);
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getExercises = getExercises;
const addWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exercises = req.body.exercises;
        const currentUser = req.body.currentUser;
        const baseWorkout = {
            isFavorited: false,
            completedAt: null
        };
        const newWorkout = new workout_1.default(Object.assign(Object.assign({}, baseWorkout), { exercises, userId: currentUser._id }));
        yield newWorkout.save();
        console.log(newWorkout);
        res.status(201).json(newWorkout);
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.addWorkout = addWorkout;
const getWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { workoutId } = req.params;
        const workout = yield workout_1.default.where({ _id: workoutId });
        res.status(200).json(workout);
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getWorkout = getWorkout;
