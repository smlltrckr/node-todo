var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
   content : {type : String, default: ''},
   completed : Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
