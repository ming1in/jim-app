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
exports.register = exports.login = exports.signUp = void 0;
const user_1 = __importDefault(require("../../models/user"));
const bcrypt = require('bcrypt');
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = (yield user_1.default.find({ email }))[0];
        if (user)
            res.status(404).json('User already exists');
        const baseUser = {
            firstName: null,
            lastName: null,
            goal: null,
            height: null,
            weight: null,
            city: null,
            age: null,
            registeredAt: null,
            gender: null
        };
        const newUser = new user_1.default(Object.assign(Object.assign({}, baseUser), { email, password: bcrypt.hashSync(password, bcrypt.genSaltSync()) }));
        yield newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.signUp = signUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = (yield user_1.default.find({ email }))[0];
        if (!user)
            res.status(404).json({ error: 'User does not exist' });
        const match = yield bcrypt.compareSync(password, user.password);
        if (!match)
            res.status(404).json({ error: 'Incorrect password' });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentUser = yield user_1.default.findById(req.body._id);
        yield (currentUser === null || currentUser === void 0 ? void 0 : currentUser.update(Object.assign({}, req.body)));
        const updatedCurrentUser = yield user_1.default.findById(req.body._id);
        res.status(201).json(updatedCurrentUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.register = register;
