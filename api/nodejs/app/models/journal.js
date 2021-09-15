
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JournalSchema = new Schema({
	description: String,
	total: Number,
	reff_no: String,
    reff_type: String,
    detail: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JournalDetail'
    }]
});

module.exports = mongoose.model('Journal', JournalSchema);