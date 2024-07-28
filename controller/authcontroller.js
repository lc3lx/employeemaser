const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs")
const {User,validateUser} = require("../model/User")



module.exports.registerUserCtrl = asyncHandler(async(req,res)=>{
    const {error} = validateUser(req.body)
    if(error){
        return res.status(400).json({message:error.details[0].message})
    }
    let user = await User.findOne({email:req.body.email})
    if(user)
    {
        return res.status(400).json({message:"User already exist"})
    }
    const  salt = await bcrypt.genSalt(10)
    const hasgedPassword = await bcrypt.hash(req.body.password,salt)
    user = new User({
        name : req.body.name,
        email:req.body.email,
        password: hasgedPassword

    })
    await user.save()
    res.status(201).json({message : "you regitered pleas sing in "})
    

})
module.exports.loginUserCtrl = asyncHandler(async(req,res)=>{
    const {error} = validateUser(req.body)
    if(error){
        return res.status(400).json({message:error.details[0].message})
    }
    const user = await User.findOne({email:req.body.email})
    if(!user)
    {
        return res.status(400).json({message:"invalid email or password"})
    }
    const isPasswordMach = await bcrypt.compare(req.body.password,user.password)
    if(!isPasswordMach)
        {
            return res.status(400).json({message:"invalid email or password"})
        }
    const token = user.generateAuthToken()
    res.status(200).json({
        _id:user._id,
        token
    })
    

})