const express = require("express");
const CoursesModel = require("../Models/CoursesModel");

const courseRouter = express.Router()

// post new courses
courseRouter.post("/add-courses", async (req, res) => {
    try {
     
      const newCourse = new CoursesModel(req.body);
      await newCourse.save();
      res.status(200).send({ msg: "newCourse added successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  });


// get all the courses
courseRouter.get('/course',async(req,res)=>{
  try {
    const AllCourses = await CoursesModel.find()
    res.status(200).send({"courses":AllCourses})
  } catch (error) {
    res.status(400).json({error: error})
  }
})

// patch course
courseRouter.patch("/update-course/:id",async(req,res)=>{
  const {id} = req.params
  try {
    await CoursesModel.findByIdAndUpdate({_id:id},req.body)
    res.status(200).send({"msg":"course has been updated successfully"})
  } catch (error) {
    res.status(400).send({"msg":error.message})
  }
})
//Delete course
courseRouter.delete("/delete-course/:id",async(req,res)=>{
  const {id} = req.params
  try {
    await CoursesModel.findByIdAndDelete({_id:id})
    res.status(200).send({"msg":"course has been deleted successfully"})
  } catch (error) {
    res.status(400).send({"msg":error.message})
  }
})

// Add Lacture Schedule



module.exports = {courseRouter}