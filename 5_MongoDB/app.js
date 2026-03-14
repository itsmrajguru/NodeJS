//add mongoose
const mongoose = require('mongoose')

//connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/BookStoreDB")

//create schema  (using model)

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isVerified: Boolean
})

//create model for userSchema
const UserModel = mongoose.model('User', userSchema)

//ConnectDB Function

async function ConnectDB() {
    try {
        //creating an entry(document)
        const user = await UserModel.create({
            name: "molu",
            email: "msr@gmail.com",
            age: 30,
            isVerified: false
        })
        console.log("user :",user)

        /*RUNNING QUERIES ON DATABASE */
        // 1) find all users
        // const userAll= await UserModel.find({})
        // console.log("All Users :",userAll)

        // 2)Find userwithverifiedFalse
        // const userwithverifiedFalse= await UserModel.find({isVerified:false})
        // console.log("Unverifies user :",userwithverifiedFalse)

        // 3)Get the data with specific properties
        // const getspecificProperties= await UserModel.find().select('-_id -age -isVerified')
        // console.log("specific properties :",getspecificProperties)

        // 4)---PAGINATION--- Get limited data with skip
        // const getlimiteddata= await UserModel.find().limit(2)
        // console.log("Limited Users:",getlimiteddata)

        // 5)---SORTING--- get sorted data with asc(1) and dec(-1)
        // const sorteddata= await UserModel.find().sort({age:-1})
        // console.log("soretd data",sorteddata)

        // 6)Coutn Documents with applied condition
        // const countdoc= await UserModel.countDocuments({isVerified:false})
        // console.log("CountedUusers:",countdoc)

        //7)Delete an document
        // const deleteUser= await UserModel.findByIdAndDelete(user._id)
        // console.log("Deleted USser:",deleteUser)

        //8)Update an element
        // const updateUser= await UserModel.findByIdAndUpdate(user._id,{ age: 35, isVerified: true },{new: true })
        // console.log("Updated USser:",updateUser)
    } catch (e) {
        console.log("Error-->", e)

    }
    finally {
        await mongoose.connection.close()
    }
}
ConnectDB()