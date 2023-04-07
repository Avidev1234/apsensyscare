import express  from "express";
import Connection from "./DB/db.js";
import cor from 'cors'
import Router from "./Router/Router.js";

const app=express();
app.use(cor());
app.use(express.json())

app.use('/', Router);


const PORT=8000;

const db=Connection();
if(db){
    console.log("hmm ji")
}
console.log(db)

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))



