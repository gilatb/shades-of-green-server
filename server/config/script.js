const db = require('../models/index.js');
const addUser = async () => {// Create a new user
  const newUser = await db.Users.create({ user_name: "Berta" })
  console.log(newUser) 
  // Find all users
  const allUsers = await db.Users.findAll()
  console.log(allUsers)
}

addUser()