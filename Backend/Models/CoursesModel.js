const mongoose = require("mongoose");

const coursesSchema = mongoose.Schema({
    courses:String,
    instructor:String
},{
    versionKey:false
});

const CoursesModel = mongoose.model("Course", coursesSchema);

module.exports = CoursesModel;
