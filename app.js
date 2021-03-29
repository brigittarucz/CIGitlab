const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const appRoutes = require('./routes/routes');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(appRoutes);

app.listen(3000);


// const mysql = require('mysql2');
// const pool = mysql.createConnection({
//     host: 'mariadb',
//     user: 'root',
//     database: 'sandbox',
//     password: 'my-secret',
//     port: 3306
// });
// const dbMaria = pool.promise();

// dbMaria.execute('SELECT * FROM sandbox_test').then(statusMaria => {
//     app.use('/', (req,res,next) => {
//         console.log("Success");
//         res.writeHead(200, {'Content-Type': 'text/html'}); 
//         res.write('Hey from the node app');
//         res.end();
//     })
// }).catch(error => {
//         console.log(new Error(error));
// })