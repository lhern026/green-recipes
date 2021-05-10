// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');

async function main() {
  // const user = await User.create({
  //   name: 'Jim Clark',
  //   email: 'jim@email.com',
  //   password: 'abc123'
  // });
  // console.log(user);
  // List all users
  const users = await User.find({});
  console.log(users);


  // process.exit();
}

main();