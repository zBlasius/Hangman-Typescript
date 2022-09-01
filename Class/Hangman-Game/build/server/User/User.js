"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bd_json_1 = __importDefault(require("../bd.json"));
class User {
    getUserInfo() {
        return {
            id: bd_json_1.default.User.id,
            age: bd_json_1.default.User.age,
            login: bd_json_1.default.User.login,
            password: bd_json_1.default.User.password
        };
    }
}
exports.default = User;
