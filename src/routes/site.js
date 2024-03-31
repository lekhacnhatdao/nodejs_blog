const express = require('express')
const router = express.Router()
 
const siteC = require('../app/controllers/SiteC')


router.use('/:search', siteC.search)
router.use('/', siteC.index)


module.exports =router