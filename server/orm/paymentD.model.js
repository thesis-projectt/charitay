module.exports = (sequelize, DataTypes) => {
    const PaymentD = sequelize.define("paymentD", {
      userid: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey : true
      },
      eventid: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey : true
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paidAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  
    return PaymentD;
  };
  