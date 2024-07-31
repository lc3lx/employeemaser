const mongoose = require("mongoose")



const orderschema = new mongoose.Schema(
    {
    customarname :{
        type:String ,
        minlength : 3,
        maxlength : 200,
        required:true
     
    },
    customarphone :{
        type : String ,
        minlength:9,
        maxlength:14,
        required:true
      
    },
    locationCar : {
        type: String,
        required:true
       
        
    },
    timeofserves :{
        type:String ,
        required:true

        

    },
    local:{
        type:String,
        required:true

       
    }



},{timestamps:true})


const Order = mongoose.model("Order",orderschema)
module.exports = Order
