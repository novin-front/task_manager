exports.forbidden = (req, res, next) => {

    if (!("user" in req.session)) {
        return res.status(403).redirect('/auth/login');
    }
    return next();
}