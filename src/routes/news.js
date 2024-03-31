const express = require('express')
const router = express.Router()
 
const newsC = require('../app/controllers/NewsC')
// newsC.index

router.use('/:slug', newsC.show)
router.use('/', newsC.index)



module.exports =router