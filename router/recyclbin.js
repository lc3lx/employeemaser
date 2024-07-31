const express = require("express")
const router = express.Router()
const {getthedata,resrverdata} = require("../controller/recyclbincontroller")

router.post("/sendorder",resrverdata)
router.get("/getorder",getthedata)
router.delete("/deleteorder/:id")
module.exports = router
