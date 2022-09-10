const isLoggedIn=(req,res,next) => {
    if(req.session.user) {
        return next();
    }
    return res.redirect('/');
}

module.exports={
    isLoggedIn: isLoggedIn
}