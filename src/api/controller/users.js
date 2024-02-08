const { signToken } = require('../../config/jwt');
const { hashPassword, verifyPassword } = require('../../config/password');
const mongo = require('../../repository/users');

const registerUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const hash = await hashPassword(password);

    const newUser = await mongo.createUserInDB({ userName, password: hash });
    res.status(201).json({ data: newUser });
  } catch (err) {
    console.log('>>>> Error creating user: ', err);
    res.status(400).json({ data: 'Error registering user' });
  }
};

const loginUser = async (req, res) => {
  const { userName, password } = req.body;

  const user = await mongo.getUserByUserNameFromDB(userName);

  if (!user) {
    res.status(401).json({ data: `User doesn't exist` });
    return;
  }

  const validPassword = await verifyPassword(password, user.password);

  if (!validPassword) {
    res.status(401).json({ data: `Incorrect userName or password` });
    return;
  }

  const token = signToken({ id: user._id });
  const { password: unusedPassword, ...restUser } = user;
  res.status(200).json({ data: { token, user: restUser } });
};

const getUser = async (req, res) => {
  const { id } = req.user;

  const user = await mongo.getUserByIdFromDB(id);

  res.status(200).json({ data: user });
};


module.exports = {
  registerUser,
  loginUser,
  getUser,
};
