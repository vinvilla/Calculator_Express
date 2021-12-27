//jslint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
// on Hyper, run npm init
// NPM : Node Package Manager

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.status(200).send("Result is" + result);
  res.status(403).end();
  res.status(400).send('Bad Request');
  res.status(404).sendFile(__dirname + "/404Error.jpeg");
  res.status(500).send({ error: 'something blew up' });
});



app.get("/BMI", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/BMI", function(req , res) {
  var n1 = parseFloat(req.body.w1);
  var n2 = parseFloat(req.body.h1);
  var result2 = n1 / (n2 * n2);
  res.status(200).send("Your BMI is " + result2);
  res.status(403).end();
  res.status(400).send('Bad Request');
  res.status(404).sendFile(__dirname + "/404Error.jpeg");
  res.status(500).send({ error: 'something blew up' });
});


app.listen(port, function() {
  console.log("Server started on port 3000");
});


// go to chrome and ebter http://localhost:3000/ in address bar
// 3. run nodemon calculator.js


// Make a new folder called Calculator on your Desktop
// Change Directory to this new folder
// Inside the Calculator folder, create a new file called calculator.js
//         Enter::: touch calculator.js
// Set up a new NPM package
//         // 1.  on Hyper, run::: npm init
// Open the project folder in Atom
// Using NPM install the express module
//        // 2. On Hyper: run::: npm install express
// Require express in your calculator.js
// Setup express
// Create a root route get method with app.get()
// Send the words Hello World from the root route as the response
// Spin up our server on port 3000 with app.listen
//
// Run server with nodemon
//      //  3. On Hyper: run::: nodemon calculator.js


//. 4. Need to install Body Parser
//  run :: npm install body-parser
