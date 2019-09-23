const router = require('express').Router();
const cntrl = require('./controllers');
const db = require('./models');

// 👍🏻 get all users:
router.get('/users', cntrl.getUsers);

// 👍🏻 get all places TODO: decorate on the map
router.get('/places', cntrl.getPlaces)

// post a new vote 
// 👍🏻 total_score + num_of_votes 
router.post('/vote', cntrl.addVote)

// 👍🏻 get a vote from a place
router.get('/place', cntrl.getCurrentScore)

module.exports = router;