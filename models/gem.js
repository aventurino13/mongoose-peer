var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var gemSchema = new Schema({
  name: String,
  type: String,
  value: Number,
  rare: Boolean,
  date: Date
});

var Gem = mongoose.model('gems', gemSchema);
module.exports = Gem;
