
const { Volunteer } = require("../orm");



module.exports = {
  //method to fetch all associations from the blog database.
  getAllvolunteer: async (req, res) => {
    try {
      const volunteer = await Volunteer.findAll({
        order: [["createdAt", "ASC"]],
        // attributes: { exclude: ['userId'] },
      });
      res.status(200).json(volunteer);
    } catch (error) {
      res.status(500).send(error);
    }
  },

     //method to fetch one association from the blog database.

  getOnevolunteer: async (req, res) => {
    try {
      const volunteer = await Volunteer.findByPk(req.params.id);
      res.status(200).json(volunteer);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  //method to add an association to the database via the respective model function.
  addvolunteer: async (req, res) => {
    try {
      console.log(req.body);
      const volunteer = await Volunteer.create(req.body);
      res.status(201).json(volunteer);
    } catch (error) {
      res.status(500).send(error);
    }
  },
 

  updateOnevolunteer: async (req, res) => {
    try {
      const volunteer = await Volunteer.update(req.body,{
        where: {id: req.params.id},
      });
      res.status(200).json(volunteer);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteOnevolunteer: async (req, res) => {
    try {
      const volunteer = await Volunteer.destroy({where:{id:req.params.id}});
      res.status(200).json(volunteer);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};




