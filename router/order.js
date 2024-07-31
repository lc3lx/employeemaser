const express = require("express")
const router = express.Router()
const {getthedata,resrverdata,updatedata,deletedata} = require("../controller/ordercontroller")
const { verifyToken } = require("../middlewere/aurthmiddlewere")


router.post("/postorder",resrverdata)
router.get("/getorder",getthedata)
router.put("/updataorder/:id",updatedata)
router.delete("/deleteorder/:id",deletedata)
module.exports = router
