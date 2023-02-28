// const express = require('express');
// const router = express.Router();
// const { Disable } = require('../orm/disable.model'); // Use a more descriptive name for the model

// // GET all disables
// router.get('/disables', async (req, res) => {
//   try {
//     const disables = await Disable.findAll({}); // Use plural name for route and model
//     res.json(disables);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// // GET disable by ID
// router.get('/disables/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const disable = await Disable.findByPk(id);
//     if (!disable) {
//       res.status(404).send('Disable not found');
//     } else {
//       res.json(disable);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// // CREATE disable
// router.post('/disables', async (req, res) => {
//   try {
//     const newDisable = await Disable.create(req.body);
//     res.json(newDisable);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// // UPDATE disable by ID
// router.put('/disables/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const [numUpdated, updatedDisables] = await Disable.update(req.body, {
//       where: { id },
//       returning: true,
//     });
//     if (numUpdated === 0) {
//       res.status(404).send('Disable not found');
//     } else {
//       res.json(updatedDisables[0]);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// // DELETE disable by ID
// router.delete('/disables/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const numDeleted = await Disable.destroy({ where: { id } });
//     if (numDeleted === 0) {
//       res.status(404).send('Disable not found');
//     } else {
//       res.send('Disable deleted successfully');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;
