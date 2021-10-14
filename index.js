import dotenv from "dotenv";
//const express = require('express')
import express from "express";
import path from "path";


const app = express();

app.get('/', (req,res)=>{ res.send("HOME")})

export default app;