module.exports = (sequelize, DataTypes) => {
    const PaymentD = sequelize.define("paymentD", {
               
     id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
       
       },
      userid: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey : true
      },

      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      associationName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    }, { timestamps: true });
  
    return PaymentD;
  };
  