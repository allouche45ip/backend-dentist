const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const infoSchema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    agee:String,
    phone:String,
    messagen:String,
},{ timestamps: true });
 
 
// Create a model based on that schema
const Info = mongoose.model("Info", infoSchema);
 
 
// export the model
module.exports = Info;