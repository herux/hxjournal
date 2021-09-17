var express = require('express');
var router = express.Router();
var Journal = require('../models/journal');

router.get('/', function(req, res, next) {
    let query = req.query;
    Journal
	    .find(query)
		// .limit(parseInt(query.limit))
		// .sort(query.order)
		// .skip(parseInt(query.page) - 1)
	    .exec(function (err, coas) {
		    if (err) return next(err);
		    res.json(coas);
	});
})

module.exports = router;