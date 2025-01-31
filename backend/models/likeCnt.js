const Sequelize = require('sequelize');

module.exports = class LikeCnt extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                }
            }, {
                sequelize,
                primarykey: false,
                underscored: false,
                charset: "utf8",
                collate: "utf8_bin",
                tableName: "likecnt",
                timestamps: false,
                paranoid: false,
            },
        );
    }

    static associate(db) {
        db.LikeCnt.belongsTo(db.Member, { onDelete: "CASCADE" });
        db.LikeCnt.belongsTo(db.Feedback, { onDelete: "CASCADE" });
    }
};