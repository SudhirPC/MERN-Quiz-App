// const mongoose = require('mongoose')

// module.export=()=>{
//   const connectionParams={useNewUrlParser:true,useUnifiedTopology:true}
//   try {
//     mongoose.connect(process.env.DATABASE,connectionParams)
//     console.log("connected to db")
//   } catch (error) {
//     console.log("error connection to db")
//   }
  
// }
const mongoose = require('mongoose')
require("dotenv").config()
module.exports = () => {
 mongoose.connect(
    process.env.DATABASE
  )
}
