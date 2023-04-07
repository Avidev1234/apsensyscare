//const mySQL = require('mysql');
import mySQL from 'mysql';
export const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "programmeadora"
});

