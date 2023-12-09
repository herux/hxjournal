
var express = require('express');
var router = express.Router();
var Student = require('../models/student');
var Utils = require('../library/utils');

router.get('/', (req, res, next) => {
    let query = req.query;
    Student
	    .find(query)
		.limit(parseInt(query.limit))
		.sort(query.order)
		.skip(parseInt(query.page))
	    .exec(function (err, data) {
		    if (err) 
				return Utils.setResponse(res, false, err, {});
		    
			Student.count().exec((err, count) => {
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
	console.log(req.body);
	let newStudent = new Student({
		fullname: req.body.fullname,
        address: req.body.address,
        telephone: req.body.telephone,
        birthplace: req.body.birthplace,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        religion: req.body.religion,
        parentname: req.body.parentname,
        parentaddress: req.body.parentaddress,
        parentphone: req.body.parentphone,
        parentjob: req.body.parentjob,
        picture: req.body.picture,
        createdat: new Date,
        updateat: new Date
	})

	newStudent.save((err) => {
		if (err) 
			return Utils.setResponse(res, false, err, {});

		Utils.setResponse(res, true, err, newStudent);
	})
});

module.exports = router;