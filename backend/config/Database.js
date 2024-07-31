import {Sequelize} from "sequelize";

const db = new Sequelize('perpussmpn1', 'username', 'password',{
    host: "localhost",
    dialect: "mysql"
})

export default db;