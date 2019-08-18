const db = require('../boot/connection');
const taskStatus = require('../models/task_status/taskStatus')
exports.create = (req, res) => {
    if (!("user" in req.session)) {
        return res.redirect('/auth/login');
    }
    res.render('tasks/create', {
        user: req.session.user
    })
};
exports.store = (req, res) => {
    let task = {
        task_title: req.body.task_title,
        task_category: req.body.task_category,
        task_assignee: req.body.task_assignee,
        task_status: taskStatus.CREATED
    }
    if (!("user" in req.session)) {
        return res.redirect('/auth/login');
    }
    db.query('INSERT INTO `tasks` SET ?', task, function (error, result, fields) {
        if (error) throw error;
        res.redirect('/tasks/add');
    })
}
exports.remove = (req, res) => {
    if (!("user" in req.session)) {
        return res.redirect('/auth/login');
    }
    const id = req.params.id;
    db.query("DELETE FROM `tasks` WHERE id=?", [id], (error, results, fields) => {
        if (error) throw error;

        if (results.affectedRows === 1) {
            res.redirect('/');
        }
    })
}
exports.edit = (req, res) => {
    if (!("user" in req.session)) {
        return res.redirect('/auth/login');
    }
    const id = req.params.id;
    db.query("SELECT * FROM `tasks` WHERE id=?", [id], (error, result, fields) => {
        if (error) throw error;

        res.render('tasks/taskEdit', {
            tasks: result[0],
            user: req.session.user
        })
    })
}
exports.saveEdit = (req, res) => {
    if (!("user" in req.session)) {
        return res.redirect('/auth/login');
    }
    const id = req.body.id;
    let task = {
        task_title: req.body.task_title,
        task_category: req.body.task_category,
        task_assignee: req.body.task_assignee,
        task_status: req.body.task_status
    }
    db.query("UPDATE `tasks` SET ?  WHERE id =?", [task, id], (error, result, fields) => {
        if (error) throw error;

        res.redirect('/');
    })
}