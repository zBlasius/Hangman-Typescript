import datastore from "../bd.json";
type LEVEL = "level01" | "level02" | "level03" | "level04";
const GLOBAL_WORDS_1 = datastore.Words.level01;
const GLOBAL_WORDS_2 = datastore.Words.level02;
const GLOBAL_WORDS_3 = datastore.Words.level03;
const GLOBAL_WORDS_4 = datastore.Words.level04;

export default class Word{

    float2int (value:number):number { // ??????????? pq isso funciona ???
        return value | 0;
    }

    randomNumeric():number{
        let intRandom = this.float2int((Math.random() * (4 - 0) + 0)) // Refatorar, pesquisar sobre a biblioteca Random
        return intRandom;
    }

    getWordByLevel(level:LEVEL):string{
        switch(level){
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

// Fazer um banco fake com json e trabalhar com state para maniipular os dados.