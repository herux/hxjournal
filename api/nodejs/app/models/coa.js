
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CoaSchema = new Schema({
	coa_no: String,
    coa_type: String,
	name: String,
	debit: Number,
    credit: Number
});

module.exports = mongoose.model('Coa', CoaSchema);