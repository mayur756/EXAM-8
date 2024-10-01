const express = require('express');
const app = express();
const path = require('path');
const userrouter = require('./routes/user.router');
const DBconet = require('./config/DB');
const blogpost = require('./routes/blogpost.router');
// ejs 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/user" , userrouter)
app.use("/blog" , blogpost)
// Start the server
app.listen(8090, () => {
  console.log(`Server running on port 8090`);
  DBconet()
});
