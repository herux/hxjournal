
var express = require('express');
var router = express.Router();
var Coa = require('../models/coa');

router.get('/', function(req, res, next) {
    let query = req.query;
    Coa
	    .find(query)
		// .limit(parseInt(query.limit))
		// .sort(query.order)
		// .skip(parseInt(query.page) - 1)
	    .exec(function (err, coas) {
		    if (err) 
				return res.json(err)
		    res.json(coas);
	});
})

module.exports = router;