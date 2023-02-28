// Define and export the sequelize model that represents the table event.
module.exports = (sequelize, DataTypes) => {
    const event = sequelize.define("event", {
      title: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      date: { type: DataTypes.DATE }
    });
  
    return event;
  };