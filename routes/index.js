var express = require ("express");

var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello Im on the start page");
    res.render("index");

});


module.exports = router;