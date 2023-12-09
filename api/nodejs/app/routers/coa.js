
var express = require('express');
var router = express.Router();
var Coa = require('../models/coa');
var Utils = require('../library/utils');

router.get('/', (req, res, next) => {
    let query = req.query;
    Coa
	    .find(query)
		.limit(parseInt(query.limit))
		.sort(query.order)
		.skip(parseInt(query.page))
	    .exec(function (err, data) {
		    if (err) 
				return Utils.setResponse(res, false, err, {});
		    
			Coa.count().exec((err, count) => {
				let dataObj = {
					data,
					pagination: {
						total_rows: count,
						page: parseInt(query.page) + 1,
						total_pages: count / query.limit
					}
				}
				Utils.setResponse(res, true, err, dataObj)
			})
	});
})

router.post('/', (req, res, next) => {
	let newCoa = new Coa({
		coa_gen : req.body.coa_gen,
		name : req.body.name,
		coa_category : req.body.coa_category,
		coa_dk : req.body.coa_dk,
		coa_gd : req.body.coa_gd,
		coa_level : req.body.coa_level,
		coa_no : req.body.coa_no,
		createdat : req.body.createdat,
		coa_sad : req.body.coa_sad,
		coa_sak : req.body.coa_sak,
		coa_md : req.body.coa_md,
		coa_mk : req.body.coa_mk,
		coa_wno : req.body.coa_wno
	})

	newCoa.save((err) => {
		if (err) 
			return Utils.setResponse(res, false, err, {});

		Utils.setResponse(res, true, err, newCoa);
	})
});

module.exports = router;