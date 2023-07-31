const mongoose = require('mongoose');

const imageSchema= new mongoose.Schema({
    url:String,
    filename:String
});
const inputSchema=mongoose.model('InputSchema',imageSchema)
module.exports=inputSchema;