                                                                                                                                                                                                                                                                                                                                                                                                              const { Sequelize, DataTypes, Model } = require('sequelize');

const config= require('../orm/config');

//Created a Sequelize instance and passed the appropriate parameters separately,
//database, user and password fields coming from the config files.
const sequelize = new Sequelize(config.DATABASE, config.USER,config.PASSWORD, {
    HOST: 'localhost',
    dialect: 'mysql'
  });

//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Association=require('./association.model')(sequelize,DataTypes) //require the association model
db.Disable=require('./disable.model')(sequelize,DataTypes) // require the disable model
db.Volunteer=require('./volunteer.model')(sequelize,DataTypes)// require the volunteer model
db.Event=require('./event.model')(sequelize,DataTypes) // require the event model 
db.Admin=require('./admin.model')(sequelize,DataTypes)// require the admin model 

// many to many relationship disable volunteer
db.Disable.belongsToMany(db.Volunteer,{
    through:"disable_volunteer"
})

db.Volunteer.belongsToMany(db.Disable,{
    through:"disable_volunteer"
})
// many to many relationship event volunteer                                
db.Volunteer.belongsToMany(db.Event,{                                 
    through:"event_volunteer"
})
db.Event.belongsToMany(db.Volunteer,{
    through:"event_volunteer"
})
// 1 to many relationship association event
db.Association.hasMany(db.Event , {
   foreignKey:"associationId",
})
  
db.Event.belongsTo(db.Association, {
  as:"association",
  foreignKey : "associationId",
  onDelete : "CASCADE ",
});

db.sequelize.sync()

db.sequelize
.authenticate()
  .then(()=>{console.log('Successfully connected')})
  .catch(err => {console.log(err)})

module.exports = db;