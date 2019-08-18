// module.exports = (app) => {
//     app.use((req, res, next) => {
//         if ((req.url == "/auth/login" || req.url == "/auth/register")) {
//             if (!("auth" in req.session)) {
//                 next();
//             }

//         } else if (!("user" in req.session)) {
//             res.send('This is your custom error page.' + req.url);
//         }

//     })
// }