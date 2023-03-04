// Define and export the sequelize model that represents the table volunteer.
module.exports = (sequelize, DataTypes) => {
 const Volunteer = sequelize.define("volunteer", {
          
      id:{
        type:DataTypes.STRING,
        primaryKey : true,
        allowNull : false
      },
     
      name: {
         type: DataTypes.STRING,
         allowNull : false
        },
      email: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
         },

    

      image: {
         type: DataTypes.STRING,
         allowNull: true,
         defaultValue : "https://moneysprite.com/sites/default/files/2022-03/Moneysprite-Avatar-male_11.png"
        },

      longitude: {
         type: DataTypes.DOUBLE,
         },
      latitude: {
        type: DataTypes.DOUBLE 
      },
      phoneNumber: {
         type: DataTypes.STRING 
        },
      verify: {
         type: DataTypes.BOOLEAN, 
         defaultValue: false 
        },
      rate: {
         type: DataTypes.FLOAT, 
         defaultValue: 0 
        },
    }, { timestamps: true });

    return Volunteer;
  };