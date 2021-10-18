import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config({path:`${__dirname}/extra/.env`});
//{path:`${__dirname}/extra/.env`}
//{path:path.resolve(__dirname,"extra",".env")}

const app = express();

app.set("view engine", "pug")
app.set("views",path.join(__dirname,"views"))

app.get('/', (req,res)=>{ res.render("home")})

export default app;