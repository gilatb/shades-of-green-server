'use strict';

module.exports = (sequelize, DataType) => {
  const User = sequelize.define('Users', {
    user_name: {
      type: DataType.TEXT,
      allowNull: true
    }
  });

  return User;
}