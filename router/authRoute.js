const express = require("express")
const router = express.Router()
const { registerUserCtrl, loginUserCtrl } = require("../controller/authcontroller")
const { verifyToken } = require("../middlewere/aurthmiddlewere")

router.post("/register",registerUserCtrl)
router.post("/login",loginUserCtrl)
module.exports = router