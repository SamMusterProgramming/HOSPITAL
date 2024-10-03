const express = require(`express`)
const cors = require('cors');
const connectDB = require('./db.js')
const roomModel = require('./models/roomModel.js')

const app = express();
app.use(express.json())
app.use(cors())
connectDB();

app.get("/rooms",async(req,res)=> {
        console.log("I am  here")
        const rooms = await roomModel.find()
        res.status(200).json(rooms)
})



app.listen(8000 , ()=>{
    console.log(`listning at port 8000`)
})
