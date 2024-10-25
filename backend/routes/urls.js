const express = require('express');
const router = express.Router();

const {handleGenerateNewUrl,handleRedirection,handleGetAnalytics} = require('../controller/urls');


router.post('/',handleGenerateNewUrl);
router.get('/:shortId',handleRedirection);
router.get('/analytics/:shortId',handleGetAnalytics);


module.exports = router;