//crating controllers for routes

//Importing model
const bookmodel = require('../models/book')

const getAllBooks = async (req, res) => {
    try{
        const getbook=await bookmodel.find()
        if(getbook?.length>0){
            res.status(200).json({
                message:"Book found",
                data:getbook
            })
        }else{
            res.status(404).json({
                message:"Book Not Found"
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"Something went wrong, please try again !",
        })
    }
}
const getSingleBook = async (req, res) => {
   try{
        const currentBookId=req.params.id
        const currentBookDetails=await bookmodel.findById(currentBookId)

        if(!currentBookDetails){
            return res.status(404).json({
                message:"Book Not Found, Try another book"
            })
        }
        res.status(200).json({
            message:"Book found",
            data:currentBookDetails
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"Somethign went wrong, please try again !",
        })
    }
}
const addNewBook = async (req, res) => {
    try {
        const incomingBook = req.body
        console.log(req.body)
        const addbook = await bookmodel.create(incomingBook)
        if (addbook) {
            res.status(201).json({
                    message: "Book added successfully",
                    data: addbook
                })
        }
    } catch (e) {
        console.log("error :", e)
    }
}
const updateBook = async (req, res) => {
    try{
        const currentBookId=req.params.id
        const currentBookBody=req.body
        const updateCurrentBook=await bookmodel.findByIdAndUpdate(currentBookId,currentBookBody,{new:true})
        if(!updateCurrentBook){
            return res.status(404).json({
                message:"Could not update book"
            })
        }
        res.status(200).json({
            message:"Book updated Successfully",
            data:updateCurrentBook
        })
    }catch(e){
        res.status(500).json({
            message:"Cant update the book"
        })
    }
}
const deleteBook = async (req, res) => {
    try{
        const currentBookId=req.params.id
        const deleteCurrentBook=await bookmodel.findByIdAndDelete(currentBookId)
        if(!deleteCurrentBook){
            return res.status(404).json({
                message:"can not delete the book"
            })
        }
        res.status(200).json({
            message:"Data deleted successfully",
            data:deleteCurrentBook
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"Somethign went wrong, please try again !",
        })
    }
}

module.exports = { getAllBooks, getSingleBook, addNewBook, updateBook, deleteBook }