"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Word_1 = __importDefault(require("./Words/Word"));
const User_1 = __importDefault(require("./User/User"));
class MainGame {
    getWord(level) {
        const wordClass = new Word_1.default();
        const currentWord = wordClass.getWordByLevel(level);
        return currentWord;
    }
    getUserInfo() {
        const userClass = new User_1.default();
        const currentUser = userClass.getUserInfo();
        return currentUser;
    }
    getProgressInfo() {
    }
}
const teste = new MainGame();
teste.getWord("level03");
