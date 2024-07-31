import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

<<<<<<< HEAD
const { DataTypes } = Sequelize;

const Books = db.define('Book', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
=======
const {DataTypes} = Sequelize;

const Books = db.define('book',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
            notEmpty: true,
            len: [3, 100]
        }
    },
<<<<<<< HEAD
    pengarang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    penerbit: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    kategori: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    sumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    noinduk: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    nopengenal: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    bahasa: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
            isUrl: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
=======
    penerbit:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063
    freezeTableName: true
});

Users.hasMany(Books);
<<<<<<< HEAD
Books.belongsTo(Users, { foreignKey: 'userId' });
=======
Books.belongsTo(Users, {foreignKey: 'userId'});
>>>>>>> 14aa7bff8e9b9607286d861408372d44f6934063

export default Books;