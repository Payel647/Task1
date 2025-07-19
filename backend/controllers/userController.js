import User from '../models/User.js';

export const getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

export const addUser = async (req, res) => {
  console.log("Adding user:", req.body);
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.status(201).json(user);
};
