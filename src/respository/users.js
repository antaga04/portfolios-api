const { User } = require('../api/model/mongo');

// El payload será { userName, passwordHash }
const createUserInDB = async (payload) => {
  const user = await User.findOne({ userName: payload.userName });
  if (user) {
    throw new Error('User exists with same userName');
  }

  const newUser = new User(payload);
  await newUser.save();

  const { password, ...rest } = newUser.toObject();
  return rest;
};

const getUserByUserNameFromDB = async (userName) => {
  const user = await User.findOne({ userName }).lean();
  return user;
};

const getUserByIdFromDB = async (id) => {
  const user = await User.findById(id).lean();
  const { password, ...rest } = user;
  return rest;
};

module.exports = {
  createUserInDB,
  getUserByUserNameFromDB,
  getUserByIdFromDB,
};
