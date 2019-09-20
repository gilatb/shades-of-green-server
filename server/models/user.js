'use strict';

module.exports = (sequelize, DataType) => {
  const User = sequelize.define('Users', {
    user_name: {
      type: DataType.TEXT,
      allowNull: true
    }
  });

  // User.associate = (db) => {
  //   console.log(db);
    
  //   db.Users.hasMany(db.Vote)
  // }

  return User;
}