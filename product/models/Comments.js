module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define ("Comments",{
        Comment_body: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Comments;
};