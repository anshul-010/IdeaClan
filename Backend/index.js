const express = require('express');
const cors = require('cors');
const { connection } = require('./db');
const { userRouter } = require('./Routes/UserRoute');
const { courseRouter } = require('./Routes/CoursesRoute');
const { LactureRoute } = require('./Routes/LactureRoute');

const app = express();
app.use(cors())
app.use(express.json());
app.use("/user",userRouter)
app.use("/courses",courseRouter)
app.use("/lacture",LactureRoute)
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to server")
        console.log("Server is running on port 8080")
    } catch (error) {
        console.log(error)
    }
});