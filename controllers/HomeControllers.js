const db = require('../boot/connection');

const home = (req, res) => {
    if (!("user" in req.session)) {
        return res.redirect('/auth/login');
    }
    db.query("SELECT * FROM `tasks`", function (error, results, fields) {
        if (error) throw error;

        res.cookie('userID', 'fdsfsadf23213', {
            httpOnly: true
        }).render('tasks/list', {
            tasks: results,
            user: req.session.user,
            uid: req.session.uid
        })
    });



}
module.exports = home;