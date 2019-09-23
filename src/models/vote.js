'use strict';

module.exports = (sequelize, DataType) => {
  const Vote = sequelize.define('Votes', {
    score: {
      type: DataType.FLOAT,
      allowNull: false
    }
  });

  Vote.associate = (db) => {
    db.Votes.belongsTo(db.Places, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });

    db.Votes.belongsTo(db.Users, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  }

  return Vote;
}