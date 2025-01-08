
//salviamo la istanza del collegamento server e db 16
const connection = require('../data/db')


// creo i controllers con la struttura REST 17
function index(req, res) {

    res.json({
        message: 'movies index',
    })
}


function show(req, res) {
    res.json({
        message: 'movies show',
    })
}

module.exports = { index, show } // esportiamo i controller.