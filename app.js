var express = require ("express");
var path = require ("path");
var calendar = require('node-calendar');
 
//this is for linking a href in router

var routes = require ("./routes/index");
var user = require ("./routes/user");
var admin = require ("./routes/admin");
var userp2 = require ("./routes/userp2");
var adminbilling = require ("./routes/adminbilling");
var adminreports = require ("./routes/adminreports");
var adminsettings = require ("./routes/settings");



var app = express();


app.set("port", process.env.port || 3000 );

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


//Static file

app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/assets", express.static(__dirname + "public/assets"));






//same edit this also dorena wag mo kalimutan
app.use('/', routes);
app.use('/index', routes);
app.use('/user', user);
app.use('/admin', admin);
app.use('/userp2', userp2);
app.use('/adminbilling', adminbilling);
app.use('/adminreports', adminreports);
app.use('/settings', adminsettings);




app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
});