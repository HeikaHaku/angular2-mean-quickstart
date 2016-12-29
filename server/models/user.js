var mongoose = require('mongoose');
var db = mongoose.connection? mongoose.connection: mongoose.createConnection('mongodb://localhost/MyDatabase');
var Schema = mongoose.Schema;

//TODO: User Model.
var userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: String,
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if(!this.created_at)
    this.created_at = currentDate;

  next();
});

var User = db.model('User', userSchema);

module.exports = User;
