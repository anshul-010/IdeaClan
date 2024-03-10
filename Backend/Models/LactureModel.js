const mongoose = require("mongoose");

const lactureSchema = mongoose.Schema({
    lacture:String,
    instructor:String,
},{
    versionKey:false
});

const LactureModel = mongoose.model("Lacture", lactureSchema);

module.exports = {LactureModel};
