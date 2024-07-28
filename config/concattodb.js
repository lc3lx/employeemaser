const mongoes = require("mongoose")
async function concatdb ()
{try {
   await mongoes.connect("mongodb+srv://masarwash:Ab6432987@masarwash1.x9zxqc2.mongodb.net/masarwash")
    console.log("is successlfuly concation")

    
} catch (error) {
    console.log(error)
    
}}


module.exports = concatdb

