const db = require('../boot/connection');
exports.showLogin = (req, res) => {
    res.render('auth/login', {
        error: false
    })
};
exports.doLogin = (req, res) => {
    let {
        email,
        password
    } = req.body;
    db.query('SELECT * FROM `users` WHERE email=? AND password=? LIMIT 1', [email, password], (error, result, fildes) => {
        if (error) throw error;
        let fullname = "";
        // fullname ? result[0].first_name + result[0].last_name : '';

        if (result.length > 0) {
            fullname = result[0].first_name + ' ' + result[0].last_name;
            req.session.user = {
                id: result[0].id || '',
                fullname,
                uid: `SU${result[0].id}dsGhrt34n2dfs`
            }
            res.redirect('/');
        } else {

            res.render('auth/login', {
                error: true
            })

        }
    })

};
exports.showRegister = (req, res) => {
    res.render('auth/register', {
        result: false
    })

}
exports.doRegister = (req, res) => {
    let {
        first_name,
        last_name,
        email,
        password
    } = req.body;
    let newUserData = {
        first_name,
        last_name,
        email,
        password,
        user_status: 0
    }

    db.query("INSERT INTO `users` SET ?", newUserData, (error, result, fildes) => {
        if (error) throw error;
        if (result.affectedRows > 0) {
            res.render('auth/register', {
                result: true
            })
        }

    });

};
exports.logout = (req, res) => {
    req.session.destroy(function () {
        res.redirect('/auth/login');
    })
}