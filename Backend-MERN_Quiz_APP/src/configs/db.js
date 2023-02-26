
const mongoose = require('mongoose')
require("dotenv").config()
module.exports = () => {
 mongoose.connect(
    process.env.DATABASE
  )
}
