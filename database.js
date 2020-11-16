const {Sequelize} = require("sequelize");
const {user, host, dbname, password} = require('./config');

const sequelizeConnection = new Sequelize(dbname, user, password,
     {
         host: host,
         dialect: "mysql",
         pool: {
            max: 10, 
            min: 0,
            acquire: 30000,
            idle: 10000
        }
     });

sequelizeConnection.authenticate()
     .then(()=> {
         console.log("Connected to Database!");
     })
     .catch((error)=> {
         console.log("ERROR", error);
     })

module.exports = sequelizeConnection;     