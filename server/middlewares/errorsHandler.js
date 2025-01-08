//middleware per gestire gli errori  7
function errorsHandler(err, _, res) { //qui passo parametro errore e res,  un trattino in baso, valore asegnato al secondo parametro req. per saltarlo.
	res.status(500).json({ //risposta di stato
		message: err.message, //messaggio
	})
}

module.exports = errorsHandler //esportiamo la funzione
