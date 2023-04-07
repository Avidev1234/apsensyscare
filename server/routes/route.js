import express from "express";
const Router = express.Router();
import { db } from '../connection/config/db.js'

const app = express();
// get all post from  blog table
Router.post('/api/get', (req, res) => {
    db.query("SELECT  * from blog", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    })
});

Router.post('/api/slider/get', (req, res) => {
    db.query("SELECT  * from blog ORDER BY ID DESC LIMIT 5", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result)
    })
});
// get post from  blog table w.r.t ID 

Router.post('/details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query('SELECT * FROM blog where id= ?', id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    })
})

console.log("hii iam route");
export default Router;
