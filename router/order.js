const express = require("express")
const router = express.Router()
const {getthedata,resrverdata,updatedata,deletedata} = require("../controller/ordercontroller")
const { verifyToken } = require("../middlewere/aurthmiddlewere")


router.post("/sendorder",verifyToken,resrverdata)
router.get("/getorder",verifyToken,getthedata)
router.put("/updataorder/:id",verifyToken,updatedata)
router.delete("/deleteorder/:id",verifyToken,deletedata)
module.exports = router
