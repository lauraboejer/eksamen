//først har jeg kaldet min installerede express-pakke, samt defineret min server og hvilken port den skal køre på.
const express = require("express"); //express er en del af API'et
const server = express(); //express server
const PORT = 4000;

const controllers = require('../client/controller/usercontroller.js')

app.post('/signup', controllers.createUser);


server.listen(PORT, (req, res) => {
  console.log('Server application is running on http://localhost:' + PORT)
});
