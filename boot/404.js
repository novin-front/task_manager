module.exports = (app) => {
    app.use((req, res, next) => {
        res.status(404).send({
            message: "page not found !!",
        })
    })
}