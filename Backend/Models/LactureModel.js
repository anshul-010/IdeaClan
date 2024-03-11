const mongoose = require("mongoose");

const lactureSchema = mongoose.Schema({
    courses:String,
    instructor:String,
    timing:String,
},{
    versionKey:false
});

const LactureModel = mongoose.model("Lacture", lactureSchema);

module.exports = {LactureModel};
