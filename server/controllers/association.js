
const { Association } = require("../orm");



module.exports = {
  getAllAssociation: async (req, res) => {
    try {
      const associations = await Association.findAll({
        order: [["createdAt", "ASC"]],
      });
      res.status(200).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  },

     //method to fetch one association from the blog database.

  getOneAssociation: async (req, res) => {
    try {
      const associations = await Association.findByPk(req.params.id);
      res.status(200).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  //method to add an association to the database via the respective model function.
  addAssociation: async (req, res) => {
    try {
      const associations = await Association.create(req.body);
      res.status(201).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  },
 

  updateOneAssociation: async (req, res) => {
    try {
      const associations = await association.update(req.body,{
        where: {id: req.params.id},
      });
      res.status(200).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteOneAssociation: async (req, res) => {
    try {
      const associations = await association.destroy({where:{id:req.params.id}});
      res.status(200).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};




