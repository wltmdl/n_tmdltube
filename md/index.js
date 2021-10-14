import mongoose from "mongoose";

mongoose.connect(process.env.mburl,{useNewUrlParser:true,useUnifiedTopology:true});

const md=mongoose.connection;
md.on("error",(err)=>{console.log( `err: ${err}`)});
md.once("open",()=>{console.log( "mongodb IN" )});