module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        user_id:{
            type:DataTypes.INTEGER,
            unique:true,
            primaryKey:true,
            autoIncrement:true
        },
        username:DataTypes.STRING(255),
        password:DataTypes.STRING(16),
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
        version:DataTypes.BIGINT
    },{
        timestamps: true,
        underscored: true,
        version:true,
        freezeTableName: true,
        associate:function (models) {
            models.user.belongsToMany(models.user,{
                as:'sender',
                through:'application',
                foreignKey:'sender_id',
                otherKey:'receive_id'
            });
            models.user.belongsToMany(models.user,{
                as:'receiver',
                through:'application',
                foreignKey:'receive_id',
                otherKey:'sender_id'
            })
        }
    })
};