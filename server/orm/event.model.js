// Define and export the sequelize model that represents the table event.
module.exports = (sequelize, DataTypes) => {
    const event = sequelize.define("event", {
       
     id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
     
     },


      title: {
         type: DataTypes.STRING,
         allowNull :false, 
        },

        
      
     
         description: {
          type: DataTypes.TEXT('long'),
          allowNull:false
          
          }, 
          amount :{
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },

       picture : {
         type : DataTypes.STRING,
         allowNull: true,

         },

      date: {
         type: DataTypes.DATE,
         allowNull:true, 
         },

       associationId : {
         type : DataTypes.INTEGER,
         allowNull: false, 
         foreignKey : true
       }  

    });
  
    return event;
  };