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
		JOURNAL_NO: req.body.JOURNAL_NO,
		DESCRIPTION: req.body.DESCRIPTION,
		TOTAL: req.body.TOTAL,
		REFF_NO: req.body.REFF_NO,
		REFF_TYPE: req.body.REFF_TYPE,
		CREATEAT: new Date,
		UPDATEAT: new Date,
		TRANSACTIONAT: req.body.TRANSACTIONAT,
		JOURNAL_DATE: new Date,
	})

	newJournal.save((err) => {
		if (err) 
			return Utils.setResponse(res, false, err, {});

		Utils.setResponse(res, true, err, newJournal);
	})
});

module.exports = router;