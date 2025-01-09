//import express  18
const express = require('express') 
const router = express.Router() //importiamo il router  19
const movieController = require('../controllers/moviesController') //salviamo la istanza dei controllers  20

const movieLoggerMiddleware = (req, res, next) => {
    console.log('Movie Request', req);
    next();
};

// index
router.get('/', movieLoggerMiddleware, movieController.index)  //creiamo la rotta index 21

// show
router.get('/:id', movieLoggerMiddleware, movieController.show) //creiamo la rotta index 22

module.exports = router  //esportiamo per dopo importare in App.js 23
