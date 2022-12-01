module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    Cart.associate = (models) => {
        Cart.belongsTo(models.Users, {
            onDelete: "cascade",
        });
        Cart.belongsTo(models.Product, {
            onDelete: "cascade",
        });
    };
    return Cart;
};