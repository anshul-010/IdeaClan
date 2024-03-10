const mongoose = require("mongoose");

const coursesSchema = mongoose.Schema({
    courseName:String,
    instructor:String
},{
    versionKey:false
});

const CoursesModel = mongoose.model("Course", coursesSchema);

module.exports = CoursesModel;
