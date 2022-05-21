const mongoose=require("mongoose");
const WiningSchema=new mongoose.Schema({
    userId:{type:String,match:/[0-9]{9}/},
    itemId:Number,
    winningDate:{type:Date,default:Date.now()}
})
const Wining=mongoose.model("Wining",WiningSchema);
module.exports={
    WiningSchema,Wining
}