const { User } = require('./db/models/user');

const comparePassword = async (username, password) => {
  try {
    const user = await User.findOne({ username })
    return (password === user.password)
  } catch (err) {
    return err
  }
}

module.exports = {
  comparePassword
}
