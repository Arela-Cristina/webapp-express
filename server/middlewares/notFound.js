//middleware per gestire contenuto non trovato  8
function notFound(req, res, _) { //qui passiamo solo req e res, non gestiamo errori
	res.status(404).json({ //risposta di stato res 404
		error: 'Not found',
		message: 'Pagina non trovata',
	})
}

module.exports = notFound //esportiamo
