import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Jwt  from 'jsonwebtoken'

const app = express();
app.use(express.json());
app.use(cookieParser);
app.use(cors(
    {
        origin: ["http://192.168.0.9:3000"],
        methods: ["POST, GET"],
        credentials: true
    }
))



const db = mysql.createConnection({
    host:"127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "signup"
})

db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + db.threadId);
  });

// app.post('/login', (req, res) => {
//     // const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
//     var query = db.query("SELECT * FROM login WHERE email = ? AND password = ?",[req.body.email], [req.body.password], (err, data) =>{
//         if(err) return res.json({Message: "Server Side Error"});
//         if(data.length > 0 ){
//             const name = data[0].name;
//             const token = Jwt.sign({name}, "our-jsonwebtoken-secret-key", {expiresIn:'1d'});
//             res.cookie('token', token); 
//             return res.json({Status: "Success"})
//         }else{
//             return res.json({Message: "No Records Existed"});
//         }
//     })
// })
app.post('./login', (req, res) => {
//     // const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
//     var query = db.query("SELECT * FROM login WHERE email = ? AND password = ?",[req.body.email], [req.body.password], (err, data) =>{
//         if(err) return res.json({Message: "Server Side Error"});
//         if(data.length > 0 ){
//             const name = data[0].name;
//             const token = Jwt.sign({name}, "our-jsonwebtoken-secret-key", {expiresIn:'1d'});
//             res.cookie('token', token); 
//             return res.json({Status: "Success"})
//         }else{
//             return res.json({Message: "No Records Existed"});
//         }
//     })
console.log("OK")
 })
db.end()




app. listen(8080, ()=>{
    console.log("Running")
})