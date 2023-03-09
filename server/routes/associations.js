const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllAssociation, addAssociation, getOneAssociation,updateOneAssociation ,deleteOneAssociation} = require('../controllers/association');

/// Association ROUTES ///

//GET request to fetch all associations. NOTE This must come before route for id.
router.get('/', getAllAssociation);
// GET request for one user.
router.get('/:email', getOneAssociation);
// POST request for creating a user.
router.post('/', addAssociation);
router.put('/:email', updateOneAssociation);
router.delete('/:email',deleteOneAssociation)


module.exports = router;