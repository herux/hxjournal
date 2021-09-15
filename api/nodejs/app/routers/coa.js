
var express = require('express');
var router = express.Router();
var Coa = require('../models/coa');

router.get('/', function(req, res, next) {
    Coa
	    .find(query)
		.limit(parseInt(req.query.limit))
		.sort(req.query.order)
		.skip(parseInt(req.query.page) - 1)
	    .exec(function (err, channels) {
		    if (err) return next(err);
		    res.json(channels);
	});
})