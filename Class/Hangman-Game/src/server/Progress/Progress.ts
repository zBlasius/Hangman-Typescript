import datastore from '../bd.json';
type LEVEL = "level01" | "level02" | "level03" | "level04";

interface ProgressData{
    life: number,
    currentLevel:string // pq não funcionar com type LEVEL aqui ?
}

export default class Progress{

    getUserInfo():ProgressData{
        return {
            life: datastore.Progress.life,
            currentLevel: datastore.Progress.currentLevel
        }
    }

}