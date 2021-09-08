const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdvertisementSchema = new Schema({
    title:{
        type:String, required:true
    },
    category:{
        type:String, required:true
    },
    storeStatus:{
        type:String, required:true
    },
    description:{
        type:String, required:true
    },
    adStatus:{
        type:String, required:true, default:"pending"
    },
    SP_ID:{
        type:String, required:true
    },
    storeId:{
        type:String, required:true
    }


});

const Advertisements =mongoose.model("Advertisements", AdvertisementSchema);
module.exports=Advertisements;