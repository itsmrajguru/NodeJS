//create a database

const mongoose=require('mongoose')

// Async funcion to crate a database

async function ConnectToDB() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Books");
        console.log("MongoDB connection Successful")
    }catch(error){
        console.error("MongoDb connection Failed",error)
        process.exit()
    }
}

module.exports=ConnectToDB

