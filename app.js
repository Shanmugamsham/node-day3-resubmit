const express=require("express")
const mongoose=require("mongoose")
const app=express()
require("dotenv").config()

const mentorRouter=require("./routes/mentorroutes")
const studentRouter=require("./routes/studentroutes")
const commonRouter =require("./routes/commonroutes")

const url=process.env.MONGO_URL
mongoose.connect(url).then(()=>{
    console.log("mongoose is working")
}).catch(()=>{
    console.log("mongoose is not working")
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/", (req, res) => {
    console.log(req.body);
    res.send("Welcome to the Server! 🌐");
  });

 app.use("/mentors", mentorRouter);
  app.use("/common", commonRouter);
  app.use("/students", studentRouter);







app.listen(process.env.PORT,process.env.HOST,()=>console.log("http://localhost:3011"))