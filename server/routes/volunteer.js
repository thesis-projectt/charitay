const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllvolunteer, addvolunteer, getOnevolunteer,updateOnevolunteer ,deleteOnevolunteer} = require('../controllers/volunteers');

/// volunteer ROUTES ///

//GET request to fetch all volunteer. NOTE This must come before route for id.
router.get('/', getAllvolunteer);
// GET request for one user.
router.get('/:id', getOnevolunteer);
// POST request for creating a user.
router.post('/', addvolunteer);
// put request for update a user.
router.put('/:id', updateOnevolunteer);
// put request for delete a user.
router.delete('/:id',deleteOnevolunteer)


module.exports = router;