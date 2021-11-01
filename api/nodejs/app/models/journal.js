
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JournalSchema = new Schema({
    journal_no: String,
	description: String,
	total: Number,
	reff_no: String,
    reff_type: String,
    createat: Date,
    updateat: Date,
    transactionat: Date,
    journal_date: Date,
    detail: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JournalDetail'
    }]
});

module.exports = mongoose.model('Journal', JournalSchema);