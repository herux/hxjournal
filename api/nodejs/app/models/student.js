var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StudentSchema = new Schema({
	FULLNAME: String,
    ADDRESS: String,
    TELEPHONE: String,
    BIRTHPLACE: String,
    BIRTHDATE: Date,
    GENDER: String,
    RELIGION: String,
    PARENTNAME: String,
    PARENTADDRESS: String,
    PARENTPHONE: String,
    PARENTJOB: String,
    PICTURE: String,
    CREATEDAT: Date,
    UPDATEAT: Date
});

module.exports = mongoose.model('Student', StudentSchema);