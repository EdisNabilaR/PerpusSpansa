import {Sequelize} from "sequelize";

<<<<<<< HEAD
const db = new Sequelize('perpussmpn1', 'username', 'password',{
=======
const db = new Sequelize('auth_db', 'root', '',{
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
    host: "localhost",
    dialect: "mysql"
})

export default db;