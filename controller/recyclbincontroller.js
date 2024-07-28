const asynchandler = require("express-async-handler")
const Recyclbin  = require("../model/Recyclbin")

const getthedata = asynchandler(async(req,res)=>{
    const recyclbin = await Recyclbin.find()
    res.status(200).json(recyclbin)

})

const resrverdata = asynchandler(async(req,res)=>{
    const recyclbin = new Recyclbin({
        customarname : req.body.customarname,
        customarphone : req.body.customarphone,
        locationCar :req.body.locationCar,
        local:req.body.local,
        timeofserves:req.body.timeofserves
        
    })
    const ruesult = await recyclbin.save()
    res.status(201).json(ruesult)
})
const deleteformrecyclbin = asynchandler(async(req,res)=>{
    const recyclbin = await Recyclbin.findById(req.params.id)
    if(!recyclbin ){
        return res.status(404).json({message :"the order id not found"})
    }
    await Recyclbin.findByIdAndDelete(req.params.id)
    res.status(200).json({message :" the order hse been deleted sccussfully"})
})
module.exports ={
    getthedata,
    resrverdata,
    deleteformrecyclbin}