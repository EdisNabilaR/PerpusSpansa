import {Sequelize} from "sequelize";

const db = new Sequelize('perpussmpn1', 'root', '',{
    host: "localhost",
    dialect: "mysql"
})

export default db;