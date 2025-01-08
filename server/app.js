console.log('cri')
const express = require('express'); //importare express  1
const cors = require('cors') //instaliamo cors 30
const app = express(); // salviamo istanza della funzione express  2
const port = 3000; //dichiariammo la porta  3
const notFound = require('./middlewares/notFound') //importiamo middleware notFound 9
const errorsHandler = require('./middlewares/errorsHandler')  //importiamo middleware notFound 11
const movieRouter = require('./routers/moviesRouter') //importiamo le rotte 24

app.use(cors()); //registriamo cors 31

// importiamo middleware per rendere publiche le immagini  6
app.use(express.static('public'))

//creiamo la prima rotta get, semplicemente mandiamo una risposta 5
app.get('/', (req, res) => {
    res.send(`Server operativo`)
})

//registrare le rotte movies 25
app.use('/api/movies', movieRouter)


//MIDDLEWARE
app.use(errorsHandler)//registriamo il middleware not Found 12
app.use(notFound) //registriamo il middleware not Found 10

//express ascolta la porta per fare adare il server   4
app.listen(port, () => {
    console.log(`Server is running on port ${port} `)
})