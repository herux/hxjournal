
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JournalSchema = new Schema({
    JOURNAL_NO: String,
	DESCRIPTION: String,
	TOTAL: Number,
	REFF_NO: String,
    REFF_TYPE: String,
    CREATEAT: Date,
    UPDATEAT: Date,
    TRANSACTIONAT: Date,
    JOURNAL_DATE: Date,
    detail: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JournalDetail'
    }]
});

module.exports = mongoose.model('Journal', JournalSchema);