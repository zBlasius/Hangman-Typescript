"use strict";
const GLOBAL_WORDS_1 = ['BANANA', 'CHUCRUTE', 'ABACAXI', 'COMPUTADOR'];
const GLOBAL_WORDS_2 = ['TECLADO', 'MOUSE', 'STRING', 'CELULAR'];
const GLOBAL_WORDS_3 = ['CHACRINHA', 'CHARLOTE', 'FUNCTION', 'ARRAY'];
const GLOBAL_WORDS_4 = ['MACARRONADA', 'CAMOMILA', 'LS-JACK', 'ESTIPURUTE'];
class Word {
    float2int(value) {
        return value | 0;
    }
    randomNumeric() {
        let intRandom = this.float2int((Math.random() * (4 - 0) + 0));
        return intRandom;
    }
    returnRandomWord(level) {
        switch (level) {
            case 1:
                return GLOBAL_WORDS_1[this.randomNumeric()];
            case 2:
                return GLOBAL_WORDS_2[this.randomNumeric()];
            case 3:
                return GLOBAL_WORDS_3[this.randomNumeric()];
            case 4:
                return GLOBAL_WORDS_4[this.randomNumeric()];
        }
    }
}
const teste = new Word();
const newWord = teste.returnRandomWord(4);
console.log('teste ', newWord);
