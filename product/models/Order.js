module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
      pname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pdesc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Order;
  };
  