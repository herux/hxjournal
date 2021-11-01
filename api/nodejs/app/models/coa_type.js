var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CoaTypeSchema = new Schema({
	typename: String
});

module.exports = mongoose.model('CoaType', CoaTypeSchema);