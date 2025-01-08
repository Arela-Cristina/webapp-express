console.log('cri')
const express = require('express'); //importare express  1
const app = express(); // salviamo istanza della funzione express  2
const port = 3000 //dichiariammo la porta  3


// importiamo middleware per rendere publiche le immagini  6
app.use(express.static('public'))

//creiamo la prima rotta get, semplicemente mandiamo una risposta 5
app.get('/', (req, res) => {
    res.send(`Server operativo`)
})



//express ascolta la porta per fare adare il server   4
app.listen(port, () => {
    console.log(`Server is running on port ${port} `)
})