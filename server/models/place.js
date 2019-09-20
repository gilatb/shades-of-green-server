'use strict';

module.exports = (sequelize, DataType) => {
  const Place = sequelize.define('Places', {
    google_id: {
      type: DataType.INTEGER,
      primaryKey: true
    },
    total_score: {
      type: DataType.INTEGER,
      default: 0
    },
    num_of_votes: {
      type: DataType.INTEGER,
      default: 0
    },
    average_score: {
      type: DataType.FLOAT,
      default: 0
    }
  });

  // Place.associate = (db) => {
  //   console.log(db);
    
  //   db.Places.hasMany(db.Vote)
  // }

  return Place;
}