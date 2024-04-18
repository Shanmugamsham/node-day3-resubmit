const mongoose=require("mongoose")

const mentorSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
    },
    {
      collection: "Mentor",
      versionKey: false,
    }
  );

const Mentor = mongoose.model("Mentor", mentorSchema);


module.exports=Mentor