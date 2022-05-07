// app.js
App({
  onLaunch() {
      wx.cloud.init({
          env:"env-6g948tux97e332ca"
      })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // }) 

    // wx.getUserProfile({
    // desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    // success: (res) => {
    //   this.setData({// 更新数据和给字段赋值
    //     avatarUrl: res.userInfo.avatarUrl,// 更新用户图像列表
    //     userInfo: res.userInfo,// 更新用户列表列表信息
    //     hasUserInfo: true,
    //   })
  },
  globalData: {
    userInfo: {}, 
    openid:"", 
    goodsnumber:"", 
    goodsaddress:"", 
    goodsname:"", 
    landnumber:"", 
    landaddress:"", 
    landname:""
  }
})
