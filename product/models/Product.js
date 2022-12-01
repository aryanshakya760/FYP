module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define ("Product",{
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
            image:{
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    });
    Product.associate = (models) => {
        Product.hasMany(models.Order, {
            onDelete: "cascade",
        });
    };
    Product.associate = (models) => {
    Product.hasMany(models.Cart, {
        onDelete: "cascade",
    }); 
    };
    return Product;
};