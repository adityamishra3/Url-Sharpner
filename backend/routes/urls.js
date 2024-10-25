const express = require('express');
const router = express.Router();
const {handleGenerateNewUrl,handleGetAnalytics,handleRedirection} = require('../controllers/urls')

router.post('/',handleGenerateNewUrl);
router.get('/:shortId',handleRedirection);
router.get('/analytics/:shortId',handleGetAnalytics);

module.exports = router;