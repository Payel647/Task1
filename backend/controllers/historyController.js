import User from '../models/User.js';
import ClaimHistory from '../models/claimHistory.js';

export const claimPoints = async (req, res) => {
  const { userId } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.totalPoints += randomPoints;
  await user.save();

  const history = new ClaimHistory({
    userId: user._id,
    userName: user.name,
    claimedPoints: randomPoints
  });

  await history.save();

  res.json({ message: `User ${user.name} awarded ${randomPoints} points`, user });
};

export const getClaimHistory = async (req, res) => {
  const history = await ClaimHistory.find().sort({ timestamp: -1 });
  res.json(history);
};
