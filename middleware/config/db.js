const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jba', { useNewUrlParser: true })

module.exports = mongoose;
