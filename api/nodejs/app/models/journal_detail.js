
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JournalDetailSchema = new Schema({
	COA_ID: String,
	HEAD_JOURNAL: String,
	DEBIT: Number,
	CREDIT: Number
});

module.exports = mongoose.model('JournalDetail', JournalDetailSchema);