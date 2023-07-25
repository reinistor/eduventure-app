import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import adventureRouter from "./routes/adventure.routes.js";


dotenv.config();

const app = express();
app.use(cors()); //adauga middleware la aplicatie
app.use(express.json({limit:'50mb'}));
app.get('/',(req,res)=>{
    res.send({message: 'Hello world!'});
})

app.use("/api/v1/users", userRouter);
app.use("/api/v1/adventures",adventureRouter);

const startServer = async()=>{
    try {
        //connect to database
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => 
            console.log('Server started on port http://localhost:8080'));

    }
    catch(error){
        console.log(error);
    }
}
startServer();