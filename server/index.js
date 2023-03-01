
const app = require("./app");
 const dotenv = require ('dotenv') ;
 

//Setting the port and listening for connections
const port = 3000;
dotenv.config();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});