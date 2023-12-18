
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
	if (req.body._id == null) { 
		// new student
		let newStudent = new Student({
			FULLNAME: req.body.FULLNAME,
			ADDRESS: req.body.ADDRESS,
			TELEPHONE: req.body.TELEPHONE,
			BIRTHPLACE: req.body.BIRTHPLACE,
			BIRTHDATE: req.body.BIRTHDATE,
			GENDER: req.body.GENDER,
			RELIGION: req.body.RELIGION,
			PARENTNAME: req.body.PARENTNAME,
			PARENTADDRESS: req.body.PARENTADDRESS,
			PARENTPHONE: req.body.PARENTPHONE,
			PARENTJOB: req.body.PARENTJOB,
		})
		newStudent.CREATEDAT = new Date;
		newStudent.UPDATEAT = new Date;
		newStudent.save((err) => {
			if (err) 
				return Utils.setResponse(res, false, err, {});
	
			Utils.setResponse(res, true, err, newStudent);
		});
	} else {
		// update student
		let newStudentData = {};
		newStudentData._id = req.body._id;
		newStudentData.FULLNAME = req.body.FULLNAME;
		newStudentData.ADDRESS = req.body.ADDRESS;
		newStudentData.TELEPHONE = req.body.TELEPHONE;
		newStudentData.BIRTHPLACE = req.body.BIRTHPLACE;
		newStudentData.BIRTHDATE = req.body.BIRTHDATE;
		newStudentData.GENDER = req.body.GENDER;
		newStudentData.RELIGION = req.body.RELIGION;
		newStudentData.PARENTNAME = req.body.PARENTNAME;
		newStudentData.PARENTADDRESS = req.body.PARENTADDRESS;
		newStudentData.PARENTPHONE = req.body.PARENTPHONE;
		newStudentData.PARENTJOB = req.body.PARENTJOB;
		newStudentData.UPDATEAT = new Date;
		console.log('newStudentData: ', newStudentData);
		Student.findByIdAndUpdate(newStudentData._id, newStudentData, (err, student) => {
			if (err) 
				return Utils.setResponse(res, false, err, {});

			Utils.setResponse(res, true, err, student);	
		})
	}
});

module.exports = router;