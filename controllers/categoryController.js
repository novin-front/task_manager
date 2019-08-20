const db = require('../boot/connection')
exports.listCategory = (req, res) => {
    db.query("SELECT * FROM `task_category`", (error, results, fields) => {
        if (error) throw error;

        res.render('category/list', {
            categorys: results,
            user: req.session.user,
            uid: req.session.uid
        })
    })
}
exports.addcategory = (req, res) => {
    let userid = req.body.user_id
    let newCategory = {
        user_id: userid.slice(2, 3),
        fullname: req.body.fullname,
        category_title: req.body.category_title,
    }

    db.query("INSERT INTO `task_category` SET ?", newCategory, (error, results, fields) => {
        if (error) throw error;

        if (results.affectedRows === 1) {
            res.redirect('/category/list')
        }
    })
}
exports.showFormAddCategory = (req, res) => {
    res.render('category/add', {
        user: req.session.user
    })
}
exports.editCategory = (req, res) => {

    let category = {
        user_id: req.body.user_id,
        fullname: req.body.fullname,
        category_title: req.body.category_title
    };
    let category_id = req.body.category_id;

    db.query("UPDATE `task_category` SET ? WHERE `category_id`= ?", [category, category_id], (error, results, fields) => {
        if (error) throw error;

        if (results.affectedRows == 1) {
            res.redirect('/category/list');
        }

    })

}
exports.getEditCategory = (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM `task_category` WHERE `category_id`= ?", id, (error, results, fields) => {
        if (error) throw error;

        res.render('category/edit', {
            user: req.session.user,
            categorys: results[0],
        })
    })
}
exports.deleteCategory = (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM `task_category` WHERE `task_category`.`category_id` = ?", id, (error, results, fields) => {
        if (error) throw error;

        res.redirect('/category/list');
    })
}