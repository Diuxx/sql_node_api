
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

con.connect((err) => {
    if(err){
        console.log('Impossible de se connecter à la base MySql')
        return;
    }
    console.log('Connecté à une base MySql')
});

con.end((err) => {
    // the connection is terminated gracefully
})

export default mysql;