
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CoaSchema = new Schema({
	coa_no: String,
	coa_wno: String,
    coa_type: String,
	coa_gen: String,
	coa_category: Number,
	coa_dk: String,
	coa_gd: String,
	coa_level: Number,
	coa_sak: Number,
	coa_sad: Number,
	coa_md: Number,
	coa_mk: Number,
	name: String,
	debit: Number,
    credit: Number,
	createdat: Date,
	updateat: Date,
});

module.exports = mongoose.model('Coa', CoaSchema);