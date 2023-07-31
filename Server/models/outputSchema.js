const mongoose = require('mongoose');

const outputSchema= new mongoose.Schema({
    url:String,
    filename:String,
    orignal_text:String,
    translated_text:String
});
const outputimage=mongoose.model('OutputSchema',outputSchema)
module.exports=outputimage;