//creating a authentication middleware


//importing jwt to extract the userInfo
const jwt=require('jsonwebtoken')
const middleware=(req,res,next)=>{
    const authHeader=req.headers['authorization'] //returns access token
    console.log(authHeader)

    const token=authHeader && authHeader.split(" ")[1];//returns splited acces token

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Access denied, no token provided"
        })
    }
    //lets extract the userInfo with the help of the jwt
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET_KEY)
    console.log(decodedToken)

    //add this info in the req if you want to show the data to the UI
    req.userInfo=decodedToken

    // IMP: we will be extracting data from req.userInfo

    next()
}
module.exports=middleware