const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllEvents, addEvent, updateEvent ,deleteEvent, getOneEvent} = require('../controllers/event');

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get('/', getAllEvents);
// POST request for creating a new post.
router.post('/', addEvent);
router.put('/:id',updateEvent)
router.delete('/:id',deleteEvent)
router.get('/:id', getOneEvent);


module.exports = router;