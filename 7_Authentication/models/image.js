// Importing Mongoose

const mongoose=require('mongoose')

// Creating image schema

const imageSchema=new mongoose.Schema({
    url: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Creating 

const imageModel=mongoose.Model('Image',imageSchema)
module.exports=imageModel
