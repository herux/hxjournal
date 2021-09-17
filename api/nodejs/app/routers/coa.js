
var express = require('express');
var router = express.Router();
var Coa = require('../models/coa');
var Utils = require('../library/utils');

router.get('/', (req, res, next) => {
    let query = req.query;
    Coa
	    .find(query)
		// .limit(parseInt(query.limit))
		// .sort(query.order)
		// .skip(parseInt(query.page) - 1)
	    .exec(function (err, coas) {
		    if (err) 
				return Utils.setResponse(res, false, err, {});
		    
			Utils.setResponse(res, true, err, coas)
	});
})

router.post('/', (req, res, next) => {
	let newCoa = new Coa({
		coa_no: req.body.coa_no,
		coa_type: req.body.coa_type,
		name: req.body.name,
		debit: req.body.debit,
		credit: req.body.credit
	})

	newCoa.save((err) => {
		if (err) 
			return Utils.setResponse(res, false, err, {});

		Utils.setResponse(res, true, err, newCoa);
	})
});

module.exports = router;