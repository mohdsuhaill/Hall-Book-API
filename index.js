import express from "express";
import HallbookRouter from './Routers/HallbookRouter.js';

const app =express()
const PORT =4000;

app.use(express.json())
app.use('/api',HallbookRouter )


app.get('/',(req,res)=>{
    res.status(200).send("Running Sucessfully")
})

app.listen(PORT,()=>{
    console.log("WeLcom To HallBook API ",PORT);
})
