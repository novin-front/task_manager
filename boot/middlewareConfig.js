const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');

module.exports = (app) => {
    app.use(bodyparser.urlencoded({
        extended: false
    }));
    app.use(bodyparser.json());
    app.use(cookieparser())
    app.use(session({
        secret: "FASD4gfd34gf5454@#$@#bfd",
        auth: false
    }));
}