import datastore from '../bd.json'

interface UserData{
    id: number,
    age:number,
    login:string,
    password: string
}

export default class User{
    getUserInfo():UserData{
        return {
            id: datastore.User.id,
            age: datastore.User.age,
            login: datastore.User.login,
            password: datastore.User.password
        }
    }
}