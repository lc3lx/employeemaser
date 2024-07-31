const express = require("express")
const cors = require('cors')

const concatdb = require("./config/concattodb")
const app = express()

require("dotenv").config()

//concatin to database
concatdb()
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use("/api/order",require("./router/order"))
app.use("/api/recyclbin",require("./router/recyclbin"))




//cerate srever 
const port =  4000
app.listen(port, ()=>{
    console.log("sever is ruing in port ${port}")
})

