const mongoose = require('mongoose');

mongoose.connect(process.env.mongodbURL|| 'mongodb://127.0.0.1:27017/users');

module.exports = mongoose.connection;





