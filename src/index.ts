import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express()

app.set('port',process.env.PORT||3001)

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send("Hola")
})

app.listen(app.get('port'),()=>console.log("server on port: ",app.get('port')))