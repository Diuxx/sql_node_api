const routes = (app) => {
    app.route('/test')
    .get((req, res, next) => {
        // middleware
        console.log(`Request de: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res, next) => {
        res.send('demande GET avec succès')
    })
    
    .post((req, res) =>
        res.send('demande POST avec succès')
    )

    app.route('/test/:id')
    .put((req, res) =>
        res.send('demande PUT avec succès')
    )
    .delete((req, res) =>
        res.send('demande DELETE avec succès')
    )
}

export default routes;