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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExercises = void 0;
const baseUrl = 'http://localhost:5000';
const getExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const group = req.body.group;
        const numExercises = req.body.numExercises;
        // const exercises: AxiosResponse = await axios.get(`${baseUrl}/seed/workout`);
        res.status(200).json(group);
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getExercises = getExercises;
