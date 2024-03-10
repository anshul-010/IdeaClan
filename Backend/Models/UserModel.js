const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    password: String,
    courses: [{ type: String }] ,
    role: { type: String, default: "student" }
},{
    versionKey:false
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
