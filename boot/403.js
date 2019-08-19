module.exports = (app) => {
    app.use((req, res, next) => {
        var user = req.session.user;
        if ((user == null) && !(req.url == "/auth/login" || req.url == "/auth/register")) {
            console.log('requst url ==', req.url)
            return res.redirect('/auth/login')
            if (user == null) {
                req.session.backTo = req.originalUrl;
                res.redirect('/auth/login');
            } else {
                req.user = user;
                next();
            }
        }
    })
}