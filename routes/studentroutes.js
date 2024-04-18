const routers=require("express").Router()
const  studentController=require("../controllers/studentconroller")

routers.post("/create", studentController.createStudent);
routers.get("/all", studentController.getAllStudents);

module.exports=routers