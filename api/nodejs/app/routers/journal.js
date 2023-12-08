var express = require('express');
var router = express.Router();
var Journal = require('../models/journal');
var Utils = require('../library/utils');

router.get('/', (req, res, next) => {
    let query = req.query;
    Journal
	    .find(query)
		.limit(parseInt(query.limit))
		.sort(query.order)
		.skip(parseInt(query.page))
	    .exec(function (err, journals) {
		    if (err) 
				return Utils.setResponse(res, false, err, {});

			Utils.setResponse(res, true, err, journals)
	});
});

router.post('/', (req, res, next) => {
	let newJournal = new Journal({
		journal_no: req.body.journal_no.journal_no,
		description: req.body.description,
		total: req.body.total,
		reff_no: req.body.reff_no,
		reff_type: req.body.reff_type,
		createat: new Date,
		updateat: new Date,
		transactionat: req.body.transactionat,
		journal_date: new Date,
	})

	newJournal.save((err) => {
		if (err) 
			return Utils.setResponse(res, false, err, {});

		Utils.setResponse(res, true, err, newJournal);
	})
});

module.exports = router;