const express = require("express");
const db =require("./orm/index.js")
const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors');



// const disableRoutes=require('./router/disable')
// app.use('/api/dis',disableRoutes)




app.listen(PORT, function () {
    console.log("listening on port 3000!");
  });


module.exports=app