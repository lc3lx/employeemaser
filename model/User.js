const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const joi = require("joi")


const UserSchema = new mongoose.Schema({
  
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},"privatkey234")
    return token
}

const User = mongoose.model("User",UserSchema)

function validateUser(user){
    const schema = joi.object({
        
        email:joi.string().required().email(),
        password:joi.string().required()
    })
    return schema.validate(user)
}
module.exports={
    User,
    validateUser
}
