function auth(req, res, next){
    var authHeader = req.headers.authorization;
    if(!authHeader){
        var err = new Error();
    }

}