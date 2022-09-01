"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bd_json_1 = __importDefault(require("../bd.json"));
class Progress {
    getUserInfo() {
        return {
            life: bd_json_1.default.Progress.life,
            currentLevel: bd_json_1.default.Progress.currentLevel
        };
    }
}
exports.default = Progress;
