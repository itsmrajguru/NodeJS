//craeting books router

const express=require('express')
const router=express.Router()

//importing book-controller
const{addNewBook,getAllBooks,getSingleBook,updateBook,deleteBook}=require('../controllers/book-controller')

//creating all the routes that are realated to books only

router.get('/get',getAllBooks)
router.get('/get/:id',getSingleBook)
router.post('/add',addNewBook)
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook)

module.exports=router