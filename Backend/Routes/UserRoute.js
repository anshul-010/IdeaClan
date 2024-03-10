const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require('../Models/UserModel');
const { auth } = require('../Middleware/authMiddleware');

const userRouter = express.Router()

// Register new user
userRouter.post("/register",async(req,res)=>{

    const { name, email, mobile, password,courses } = req.body;
    try {
        const isUser = await UserModel.findOne({ email });
    if (isUser) {
      return res.status(200).send({ msg: "this email is already used" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send({ msg: err });
        } else {
          const newUser = new UserModel({
            name,
            email,
            mobile,
            password: hash,
            courses
          });
          await newUser.save();
          res.status(200).send({ msg: "New user has been registered",courses });
        }
      });
    } catch (error) {
      res.status(400).send({ msg: error });
    }

})



// login Route
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, user: user },
            "jwt_secret_key",
            { expiresIn: "12h" }
          );
          res
            .status(200)
            .send({
              msg: "login Successful",
              name: user.name,
              email: user.email,
              mobile: user.mobile,
              courses:user.courses,
              role:user.role,
              token,
            });
        }
      });
    } else {
      res.status(200).send({ msg: "wrong credential" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// get all users

userRouter.get('/users',auth, async(req,res)=>{
  try {
    const allUsers = await UserModel.find({ role: { $ne: 'admin' } }).select('-password');
    res.status(200).send({"users":allUsers}) 
  } catch (error) {
    res.status(500).send({"error": error});
  }
})


// delete user

userRouter.delete("/delete-user/:id", auth, async (req, res) => {
  const {id} = req.params
  try {
    await UserModel.findByIdAndDelete({_id: id});
    res.status(200).send({ "message": "User Deleted Successfully" });
  } catch (error) {
      res.status(400).send({"mse":error.message});    
  }
});


module.exports = {userRouter}