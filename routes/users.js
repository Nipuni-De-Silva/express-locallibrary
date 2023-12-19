var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});


// json response
// router.get('/', (req, res, next) => {
//   res.json({ name: 'Nipuni' })
// });

// router.get('/cool/details', function(req, res, next) {
//   res.send("You're details");
// });

// router.get('/details', function(req, res, next){
//   res.send("User details")
// })

// router.get('/:userId/books/:bookId', (req, res, next) => {
//   res.send(req.params)
// })

module.exports = router;
