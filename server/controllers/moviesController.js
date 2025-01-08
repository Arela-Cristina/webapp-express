
//salviamo la istanza del collegamento server e db 16
const connection = require('../data/db')


// creo i controllers con la struttura REST 17

//index
function index(req, res) {
    //esseguiamo prima la query su workbench per poi fare la query giusta ed avere tutti i film 26
    let sql = `SELECT * FROM movies`
    connection.query(sql, (err, movies) => {
        if (err) return res.status(500).json({ message: err.message })
        res.json(movies)
    })
}

//show
function show(req, res) {
  //recupero el id di ogni movie 27
    const id = req.params.id
   
    //query per avere un film 28
    const sql = `SELECT * FROM movies WHERE id = ?`

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message })
        if (results.length === 0)
            return res.status(404).json({
                error: 'Not Found',
                message: 'Movie not found',
            })

        const movie = results[0]

        const sql = `SELECT * FROM reviews WHERE movie_id = ?` //query per avere la review di un film 29

        connection.query(sql, [id], (err, results) => {
            if (err) return res.status(500).json({ message: err.message })

            movie.reviews = results
           
            res.json(movie)
        })
    })
}

module.exports = { index, show } 