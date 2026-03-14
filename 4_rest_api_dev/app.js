// Creating a BoorkStore REST API

const express = require('express')
const app = express()
const PORT = 2323;

//Adding  Body parser Middleware

app.use(express.json())

//Routes

// all books
const books = [
    { id: 1, name: "Book 1" },
    { id: 2, name: "Book 2" }
];
// Intro Route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Bookstore"
    }
    )
})

//Get all books
app.get('/get', (req, res) => {
    res.json(books)
})


//Get a single book based on id
// app.get('/get/:id', (req, res) => {
//     const book = books.find(item => item.id === Number(req.params.id))
//     if (book) { res.json(book) }
//     else { res.status(404).send("Book Not Found, Try another book") }
// })



//creating a new book
// app.post('/add', (req, res) => {
//     const newbook = {
//         id: books.length + 1,
//         name: `book ${books.length + 1}`
//     }
//     books.push(newbook)
//     res.status(200).json(newbook)
// })


//updating a book

// app.put('/update/:id', (req, res) => {
//     const currentbook = books.find(book => book.id === Number(req.params.id))
//     if (currentbook) {
//         currentbook.name = req.body.name || currentbook.name
//         res.json({
//             message: "Book updated successfully",
//             data: currentbook.name
//         })
//     }
//     else {
//         res.status(404).send("Book Not Found")
//     }
// })

//Deleting a book
app.delete('/delete/:id', (req, res) => {
    const bookIndex = books.findIndex(book => book.id === Number(req.params.id))
    if (bookIndex === -1) { res.status(404).send("Book Not Found") }
    const deletedbook = books.splice(bookIndex, 1)
    res.json({
        message: "Book Deleted successfully",
        data: deletedbook
    })

})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})