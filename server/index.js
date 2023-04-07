//const express = require('express');
import express, { response } from 'express'
import { db } from './connection/config/db.js'
import cor from 'cors'
import multer from 'multer';
import moment from 'moment';
import Router from "./routes/route.js";

const app = express();
app.use(cor());
app.use(express.json())
const PORT = 2306;
// it redirects all endpoints to route.js file
app.use('/', Router);
if (db) {
    console.log("successfully connected");
} else {
    console.log("error");
}
// -------------------------------------------------


// img storage confing

// -------------------------------------------------
console.log("hello before");

//post request for posting blogs
app.post('/site_user',(req, res) => {
   console.log(req);
})
//post request for getting blogs data for top slider


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})