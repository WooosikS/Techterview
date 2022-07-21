const Sequelize = require('sequelize');

module.exports = class Feedback extends Sequelize.Model{
    static init(sequelize){
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                feedback_title: {
                    type: Sequelize.STRING(50),
                },
                like_cnt: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                },                
                reply_cnt: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                }
            }, {
                sequelize,
                underscored: false,
                charset: "utf8", 
                collate: "utf8_bin", 
                tableName: "feedback", 
                timestamps: true, 
                paranoid: false, 
            },
        );
    }

    static associate(db) {
        db.Feedback.hasMany(db.LikeCnt);
        db.Feedback.hasMany(db.Reply);
        db.Feedback.belongsTo(db.Recording);
        db.Feedback.belongsTo(db.SubCategory);
    }
};