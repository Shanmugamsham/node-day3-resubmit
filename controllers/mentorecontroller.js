const Mentor=require("../models/mentoremodel")

const createMentor = async (req, res, next) => {
  console.log(req.body);
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: "Name is a required field." });
      }
      const existingMentor = await Mentor.findOne({ name });
      if (existingMentor) {
        return res
          .status(400)
          .json({ error: "Mentor with the same name already exists." });
      }
      const mentor = await Mentor.create(req.body);
      res.status(201).json({ message: "Mentor created successfully", mentor });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  
  const getAllMentors = async (req, res, next) => {
    try {
      const allMentors = await Mentor.find();
      res.json(allMentors);
    } catch (error) {
      next(error);
    }
  };

  module.exports={
    createMentor,
    getAllMentors,
  }