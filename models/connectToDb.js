require('dotenv').config()
const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('connected successfully to database'))
  .catch((err) => console.log(err))