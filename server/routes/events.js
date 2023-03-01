const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllEvents, addEvent, updateEvent ,deleteEvent} = require('../controllers/event');

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get('/getAllEvents', getAllEvents);
// POST request for creating a new post.
router.post('/add', addEvent);
router.put('/updateOneEvent/:id',updateEvent)
router.delete('/deleteOneEvent/:id',deleteEvent)



module.exports = router;