const jwt = require("jsonwebtoken")


function verifyToken (req,res,next){
    const authtokenk = req.headers.authorization
    if(authtokenk){
        const token = authtokenk.split(" ")[1]
        try {
            const decodedpauload = jwt.verify(token,"privatkey234")
            req.user = decodedpauload
            next()
            
        } catch (error) {
            return res.status(401).json({message:"invalid token access denied" })
        }
    }else{
        return res.status(401).json({message:"no token provided access denied" })
    }
}
module.exports = {
    verifyToken
}