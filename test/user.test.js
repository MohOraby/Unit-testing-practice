const { expect } = require('chai');

require('../db/mongoose');

const { User } = require('../db/models/user');

const { comparePassword } = require('../userController')

describe('Test Users', () => {
  before(async () => {
    await User.create({
      username: 'oraby',
      password: '123456'
    });
  });

  describe('testing user login success', () => {
    it('should login successfully', async () => {
      const valid = await comparePassword('oraby', '123456')
      expect(valid).to.equal(true)
    });
  });

  describe('testing user login success', () => {
    it('should login successfully', async () => {
      const valid = await comparePassword('oraby', '777789')
      expect(valid).to.equal(false)
    });
  });

  after(async () => {
    await User.deleteMany()
  });
});