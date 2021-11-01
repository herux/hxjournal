
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JournalDetailSchema = new Schema({
	coa_id: String,
	head_journal: String,
	debit: Number,
	credit: Number
});

module.exports = mongoose.model('JournalDetail', JournalDetailSchema);