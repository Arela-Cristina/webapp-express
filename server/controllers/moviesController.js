
//salviamo la istanza del collegamento server e db 16
const connection = require('../data/db')


// creo i controllers con la struttura REST 17

//index
function index(req, res) {
    //esseguiamo prima la query su workbench per poi fare la query giusta ed avere tutti i film 26
    // let sql = `SELECT * FROM movies`
    // connection.query(sql, (err, movies) => {
    //     if (err) return res.status(500).json({ message: err.message })
    //     res.json(movies)
    // })

    let sql = `SELECT movies.*, AVG(reviews.vote) AS avg_vote 
    FROM movies
    JOIN reviews
    ON movies.id = reviews.movie_id`

    // BONUS: aggiungere eventuali filtri
    if (req.query.search) {
        sql += ` WHERE title LIKE '%${req.query.search}%' OR director LIKE '%${req.query.search}%' OR abstract LIKE '%${req.query.search}%'`
    }

    sql += ` GROUP BY movies.id`

    // BONUS: aggiungere paginazione
    // BONUS: aggiungere ordinamento

    connection.query(sql, (err, movies) => {
        // console.log(err)
        if (err) return res.status(500).json({ message: err.message })

        console.log("Movies array:", movies);

        movies.forEach((movie) => {
            //console.log('original movie', movie,  movie.image)
            movie.image = `http://localhost:3000/${movie.image}`;

        })

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

        connection.query(sql, [id, 3], (err, results) => {
            if (err) return res.status(500).json({ message: err.message })

            movie.reviews = results
            //console.log(movie.reviews);

            const reviewVotes = [];
            movie.reviews.forEach(review => {
                reviewVotes.push(review.vote);
            });

            let reviewSum = 0;
            for (let i = 0; i < reviewVotes.length; i++) {
                reviewSum += reviewVotes[i];
            }
            const reviewAvg = reviewSum / reviewVotes.length;

            movie.avg_vote = reviewAvg;

            res.json(movie);
        })
    })
}

module.exports = { index, show } 