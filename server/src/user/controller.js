import UserModel from './model';

export default {
  updateProfile: async (req, res, next) => {
    try {
      const { password, firstName, lastName } = req.body;

      // Validate required fields
      if (!password || !firstName || !lastName) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Verify password
      const isValidPassword = await req.user.comparePassword(password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Incorrect password' });
      }

      // Update only safe fields
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.user._id,
        {
          name: {
            first: firstName,
            last: lastName
          }
        },
        { new: true, runValidators: true }
      );

      res.status(200).json({ user: updatedUser });
    } catch (error) {
      next(error);
    }
  }
};
