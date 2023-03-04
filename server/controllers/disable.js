

const { Disable } = require("../orm");



module.exports = {
  //method to fetch all disable from the blog database.
  getAlldisable: async (req, res) => {
    try {
      const disable = await Disable.findAll({
        order: [["createdAt", "ASC"]],
        // attributes: { exclude: ['userId'] },
      });
      res.status(200).json(disable);
    } catch (error) {
      res.status(500).send(error);
    }
  },

     //method to fetch one disable from the blog database.

  getOnedisable: async (req, res) => {
    try {
      const disable = await Disable.findByPk(req.params.id);
      res.status(200).json(disable);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  //method to add an disable to the database via the respective model function.
  adddisable: async (req, res) => {
    try {
      const disable = await Disable.create(req.body);
      res.status(201).json(disable);
    } catch (error) {
      res.status(500).send(error);
    }
  },
 
//method to update an disable to the database via the respective model function.
  updateOnedisable: async (req, res) => {
    try {
      const disable = await Disable.update(req.body,{
        where: {id: req.params.id},
      });
      res.status(200).json(disable);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  //method to delete an disable to the database via the respective model function.
  deleteOnedisable: async (req, res) => {
    try {
      const disable = await Disable.destroy({where:{id:req.params.id}});
      res.status(200).json(disable);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};




