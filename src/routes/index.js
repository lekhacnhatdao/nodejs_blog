const newsRouter = require('./news')
const siteRouter = require('./news')

function route(app) {
    app.get('/', (req, res) => {

        res.render('home')
    })
    app.use('/news', newsRouter)
    app.use('/', siteRouter)

    //   app.get('/news', (req, res) => {
    //     console.log(req.query.q)
    //     res.render('news')
    //   })
 

}


module.exports = route;