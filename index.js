import express from "express";
import urlRoute from './routes/url.js';
import { connectToMongoDB } from "./connect.js";
import URL from "./models/url.js";


const app = express();
const PORT = 8001;

connectToMongoDB(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDB connected");
    
}).catch(()=>{
    console.log( "MongoDb did'nt connect" );
    
})

app.set("view engine", "ejs");
app.use(express.json());

app.use("/url", urlRoute);

app.get('/:shortId', async(req,res)=>{
const shortId = req.params.shortId;
const entry = await URL.findOneAndUpdate(
    {shortId},
    {$push: {visitHistroy: {timestemp: Date.now()}}},
);
entry.redirect(entry.redirectURL);
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));