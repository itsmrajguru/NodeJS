//File Handling in Node
// Note:Always Use Async Function

const fs = require('fs')

// Writing a File
// fs.writeFile('./D.txt', 'Heyy', (err) => {
//     if (err) return console.log(err)

//     console.log("File Created Successfully")



// Reading a File
    fs.readFile('./D.txt', 'utf8', (err, data) => {
        if (err) return console.log(err)

        console.log("File Content:", data)
    })
    
// Appending the File
fs.appendFile('./D.txt', " Mangesh is a Brahamchari.\n", (err) => {
    if (err) return console.log(err)

    console.log("File Appended Successfully")
})