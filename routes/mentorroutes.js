const routers=require("express").Router()
const  mentorController=require("../controllers/mentorecontroller")

routers.post("/create", mentorController.createMentor);
routers.get("/all", mentorController.getAllMentors);


module.exports=routers