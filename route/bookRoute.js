const express = require('express')
const router = express.Router()
const books = require('../book')

// http://localhost:3000/books
router.get('/',(req,res)=>{
    try{
        res.status(200).json(books)
    } catch(error){
        console.error(error)
        res.status(404).json({error:" books not avaliable"})
    }
})
// http://localhost:3000/books/1
router.get('/:id',(req,res)=>{
    try{
        const bookID = parseInt(req.params.id)
        
        const book = books.find(book=>book.id === bookID)
        if(!book){
            return res.status(404).json({error:"Book not found"})
        }
        res.status(200).json(book)
    }catch(error){
        console.error(error)
        res.status(500).json({error:error.message})
    }
    
})


module.exports = router
