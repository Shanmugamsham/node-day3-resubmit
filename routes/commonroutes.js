const routers=require("express").Router()
const commonController=require("../controllers/commonconroller")

routers.put("/assign-mentor/:studentId/:mentorId",commonController.assignStudentToMentor);
routers.put("/assign-or-change-mentor/:studentId/:newMentorId", commonController.assignOrChangeMentorForStudent);
routers.get("/mentor-students/:mentorId", commonController.getMentorStudents);
routers.get("/previous-mentor/:studentId", commonController.getPreviousMentor);

module.exports=routers