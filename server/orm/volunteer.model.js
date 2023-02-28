// Define and export the sequelize model that represents the table volunteer.
module.exports = (sequelize, DataTypes) => {
 const Volunteer = sequelize.define("volunteer", {
      name: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      longitude: { type: DataTypes.DOUBLE },
      latitude: { type: DataTypes.DOUBLE },
      phoneNumber: { type: DataTypes.INTEGER },
      verify: { type: DataTypes.BOOLEAN, defaultValue: false },
      rate: { type: DataTypes.FLOAT, defaultValue: 0 },
    }, { timestamps: true });
    return Volunteer;
  };