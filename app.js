const express = require('express');
const app = express();
require('./boot/middlewareConfig')(app);
require('./boot/appConfig')(app);

require('./router/roters')(app);

require('./boot/404')(app);
const start = () => {

    app.listen(1700, () => {
        console.log('app is running 17 ...');
    })
}
module.exports = start;