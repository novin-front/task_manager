const db = require('../boot/connection');
exports.showFormAddUser = (req, res) => {
    res.render('users/add', {
        user: req.session.user
    })
}
exports.addUSer = (req, res) => {
    let userdata = req.body;
    console.log(req.body);
    console.log("user data add new user =", userdata)
    console.log("user ==>", typeof (userdata))
    db.query("INSERT INTO `users` SET ? ", userdata, (error, results, fields) => {
        if (error) throw error;
        console.log("results new =", results)
        if (results.affectedRows === 1) {
            res.redirect('/user/list')
        }

    })
}
exports.editUser = (req, res) => {

    let {
        id,
        first_name,
        last_name,
        password,
    } = req.body;
    console.log(req.body);
    db.query("UPDATE `users` SET `first_name` = ? ,`last_name` = ?, `password` = ?  WHERE `users`.`id` = ?", [first_name, last_name, password, id], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        if (results.affectedRows === 1) {
            res.redirect('/user/list')
        }

    })
}
exports.getEditUserData = (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM `users` WHERE id=?', id, (error, results, fields) => {
        if (error) throw error;
        res.render('users/edit', {
            useredit: results[0],
            user: req.session.user
        })
    })
}
exports.usersList = (req, res) => {
    db.query('SELECT * FROM `users`', (error, results, fields) => {
        if (error) throw error;
        res.render('users/list', {
            users: results,
            user: req.session.user,
            uid: req.session.uid
        })
    })
}
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM `users` WHERE id=? LIMIT 1', id, (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        res.redirect('/user/list')
    })
}