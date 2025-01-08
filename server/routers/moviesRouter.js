//import express  18
const express = require('express') 
const router = express.Router() //importiamo il router  19
const movieController = require('../controllers/bookController') //salviamo la istanza dei controllers  20

// index
router.get('/', movieController.index)  //creiamo la rotta index 21

// show
router.get('/:id', movieController.show) //creiamo la rotta index 22

module.exports = router  //esportiamo 23
