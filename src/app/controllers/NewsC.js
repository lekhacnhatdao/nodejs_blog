class NewsC {
    //Get /news
    index(req , res) {
        res.render('news')
    }
    //Get /news
    show(req , res){
        res.render('search')
    }
}
module.exports = new NewsC;