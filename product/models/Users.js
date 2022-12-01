module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define ("Users",{
        fName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        lName: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        }, 
        verify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
    Users.associate = (models) => {
        Users.hasMany(models.Order, {
            onDelete: "cascade",
        });  
    };
    Users.associate = (models) => {
        Users.hasMany(models.Cart, {
            onDelete: "cascade",
        });  
    };
    return Users;
};