// Require the Express module
const express = require("express");

// Create a new instance of an Express app
const app = express();

// Require our routes
const routes = require("./routes");

// Set the values for our port and hostname
const port = 3000;
const hostname = "127.0.0.1";

// Require the connection to our database
const mongoDBconnect = require("./schemas");
 
// Call the connect function to establish a connection to our database
mongoDBconnect();

// Configure middleware to parse JSON
app.use(express.json());


app.use("/api", routes);

app.get("/", (req, res) => {
  // Send a simple "Hello World!" message
  res.send("Hello World!");
});

// Start the app
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
