//importng mongoose

const mongoose = require('mongoose');

//creating a database

async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected Succesfully");
    } catch (e) {
        console.log("Database connection failed",e);
        process.exit()
    }
}

module.exports=connectToDB;