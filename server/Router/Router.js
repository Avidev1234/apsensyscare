import express from "express";
const Router = express.Router();
import Connection from "../DB/db.js";
const app = express();

const db = Connection();
if (db) {
    console.log("hmm ji")
}

app.post('/site_user', (req, res) => {

    console.log(req)
    // const username = req.body.userName;
    // const title = req.body.title;
    // const text = req.body.text;

    // db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)", [title, text, username], (err, result) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log(result)
    // });
})

export default Router;
