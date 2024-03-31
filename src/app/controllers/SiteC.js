class SiteC{
    index(req , res) {
        res.render('home')
    }
    //Get /news
    search(req , res){
        res.render('search')
    }
}
module.exports = new SiteC;