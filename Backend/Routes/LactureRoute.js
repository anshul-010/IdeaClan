const express = require("express");
const { LactureModel } = require("../Models/LactureModel");
const { auth } = require("../Middleware/authMiddleware");

const LactureRoute = express.Router();

// get lacture
LactureRoute.get('/get-lacture',auth, async(req,res)=>{
    try {
        const userCourses = req.user.courses; 
        const lactures = await LactureModel.find({ courses: { $in: userCourses } }); 
        res.status(200).send({ lactures: lactures });
    } catch (error) {
        res.status(400).json({ error: error });
    }
  })

// get All Lactures
  
LactureRoute.get('/all-lacture', async(req,res)=>{
    try {
        const lactures = await LactureModel.find(); 
        res.status(200).send({ lactures: lactures });
    } catch (error) {
        res.status(400).json({ error: error });
    }
  })



// Add Lacture Schedule
LactureRoute.post("/schedule", async (req, res) => {
  try {
    const newLacture = new LactureModel(req.body);
    await newLacture.save();
    res.status(200).send({ msg: "Lacture added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});

// Edit or patch scheduled lacture

LactureRoute.patch("/edit/:id",async(req, res)=>{
    const {id} = req.params
    try {
        await LactureModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"msg":"lacture has been updated successfully"})
  } catch (error) {
        res.status(400).send({"msg":error.message})
  }
})

// remove lacture
LactureRoute.delete("/delete/:id",async(req, res)=>{
    const {id} = req.params
    try {
        await LactureModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"lacture has been deleted successfully"})
  } catch (error) {
        res.status(400).send({"msg":error.message})
  }
})

module.exports = { LactureRoute };
