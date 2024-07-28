const mongoose = require("mongoose")



const orderschema = new mongoose.Schema(
    {
    customarname :{
        type:String ,
        minlength : 3,
        maxlength : 200,
     
    },
    customarphone :{
        type : String ,
        minlength:9,
        maxlength:14,
      
    },
    locationCar : {
        type: String,
       
        
    },
    timeofserves :{
        type:String ,
        

    },
    local:{
        type:String,
       
    }



},{timestamps:true})


const Order = mongoose.model("Order",orderschema)
module.exports = Order
