const User = require('../Models/user')
const userController = {}

userController.saveUser = async (userName, sid) => {
  // 존재하는 유저 이름인지 확인
  let user = await User.findOne({ name: userName })

  // 없다면 새로 만들기
  if (!user) {
    user = new User({
      name: userName,
      token: sid,
      // online: true,
    })
  }

  // 이미 있는 유저면 token값만 바꾸기
  user.token = sid

  // user.online = true

  await user.save()
  return user
}

userController.checkUser = async (sid) => {
  const user = await User.findOne({ token: sid })
  if (!user) throw new Error('user not found')
  return user
}

module.exports = userController
