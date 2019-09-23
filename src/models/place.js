'use strict';

module.exports = (sequelize, DataType) => {
  const Place = sequelize.define('Places', {
    google_id: {
      type: DataType.TEXT,
      primaryKey: true
    },
    total_score: {
      type: DataType.INTEGER,
      defaultValue: 0
    },
    num_of_votes: {
      type: DataType.INTEGER,
      defaultValue: 0
    },
    average_score: {
      type: DataType.FLOAT,
      defaultValue: 0
    }
  });

  // Place.associate = (db) => {
  //   console.log(db);
    
  //   db.Places.hasMany(db.Vote)
  // }

  return Place;
}