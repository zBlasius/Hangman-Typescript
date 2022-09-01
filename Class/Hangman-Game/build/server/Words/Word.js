"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bd_json_1 = __importDefault(require("../bd.json"));
const GLOBAL_WORDS_1 = bd_json_1.default.Words.level01;
const GLOBAL_WORDS_2 = bd_json_1.default.Words.level02;
const GLOBAL_WORDS_3 = bd_json_1.default.Words.level03;
const GLOBAL_WORDS_4 = bd_json_1.default.Words.level04;
class Word {
    float2int(value) {
        return value | 0;
    }
    randomNumeric() {
        let intRandom = this.float2int((Math.random() * (4 - 0) + 0)); // Refatorar, pesquisar sobre a biblioteca Random
        return intRandom;
    }
    getWordByLevel(level) {
        switch (level) {
            case "level01":
                return GLOBAL_WORDS_1[this.randomNumeric()];
            case "level02":
                return GLOBAL_WORDS_2[this.randomNumeric()];
            case "level03":
                return GLOBAL_WORDS_3[this.randomNumeric()];
            case "level04":
                return GLOBAL_WORDS_4[this.randomNumeric()];
        }
    }
}
exports.default = Word;
// Fazer um banco fake com json e trabalhar com state para maniipular os dados.
