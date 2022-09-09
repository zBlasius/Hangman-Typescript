import Word from './Words/Word';
import User from './User/User';
import Progress from './Progress/Progress'

type LEVEL = "level01" | "level02" | "level03" | "level04";

interface UserData{
    id: number,
    age:number,
    login:string,
    password: string
}

export default class MainGame{
    
    getWord(level:LEVEL):string{
        const wordClass = new Word();
        const currentWord = wordClass.getWordByLevel(level);
        return currentWord;
    }

    getUserInfo():UserData {
        const userClass = new User();
        const currentUser = userClass.getUserInfo();
        return currentUser
    }

    getProgressInfo(){
        const progressClass = new Progress();
        const currentProgress = progressClass.getUserInfo();
        return currentProgress
    }

}