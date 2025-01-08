//importiamo mysql2   13
const mysql = require('mysql2')


const connection = mysql.createConnection({ //dichiariamo i nostri dati di workbench con la funzione createConnection 14
    host: 'localhost',
    user: 'root',
    password: 'Jcryxc8c@',
    database: 'movies_db'
})

connection.connect((err) => { // connection tramite callback  15
    if (err) throw err

    console.log('Collegamento MYSQL ok')
})

module.exports = connection