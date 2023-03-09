const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAlldisable, adddisable, getOnedisable,updateOnedisable,deleteOnedisable} = require('../controllers/disable');

/// Association ROUTES ///

//GET request to fetch all disable. NOTE This must come before route for id.
router.get('/', getAlldisable);
// GET request for one user.
router.get('/:id', getOnedisable);
// POST request for creating a user.
router.post('/', adddisable);
// put request for update a user.
router.put('/:id', updateOnedisable);
// delete request for delete a user.
router.delete('/:id',deleteOnedisable)


module.exports = router;