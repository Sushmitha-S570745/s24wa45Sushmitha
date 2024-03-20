var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res, next) {
    // Generate random values for x and y
    let x = req.query.x ? parseFloat(req.query.x) : Math.random()* 100;
    let y = Math.random() * 100;
 
    // Apply Math.atan2() to calculate the angle in radians
    let result = Math.atan2(y, x);
 
    // Construct the response string
    let response = `Math.atan2 applied to (${x}, ${y}) is ${result}`;
 
    // Send the response
    res.send(response);
});
 
module.exports = router;
