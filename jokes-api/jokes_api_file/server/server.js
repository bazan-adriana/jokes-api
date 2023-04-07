// import dependencies
const express = require("express");
const app = express();

// config 
require("./configs/mongoose.config");

// add express config
app.use(express.json(), express.urlencoded({ extended: true }));

// routes
const Routes = require("./routes/jokes.routes");
Routes(app);

// lisent to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));