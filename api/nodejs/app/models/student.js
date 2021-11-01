var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StudentSchema = new Schema({
	fullname: String,
    address: String,
    telephone: String,
    birthplace: String,
    birthdate: Date,
    gender: String,
    religion: String,
    parentname: String,
    parentaddress: String,
    parentphone: String,
    parentjob: String,
    picture: String,
    createdat: Date,
    updateat: Date
});

module.exports = mongoose.model('Student', StudentSchema);