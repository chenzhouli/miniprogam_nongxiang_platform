// pages/load/load.js
var app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: '../../icon/169ebd7d9759ad58b68aa02b2954b68a.jpeg', // 未登录时的状态图片
        userInfo: {}, // 存储用户信息列表
        hasUserInfo: false,
        haveGetOpenId: false,
        envId: '',
        openId: '',
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') // 如需尝试获取用户信息可改为false

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        //查看是否授权        
        wx.getSetting({
        success: function(res) {
            if (res.authSetting['scope.userInfo']) {       
                console.log("用户授权了");        
             } else {      
         //用户没有授权      
        console.log("用户没有授权");}
    },
})
 },
 getUI(e) { //点击授权登录时产生的监听事件
    app.globalData.userInfo = e.detail.userInfo
    var t = this // 定义 变量 t var 可以定义全局变量 let 定义局部变量
    console.log('获取头像昵称', e) // console.log 打印输出

    //获取云函数
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid
      });
     console.log('openid',resp.result.openid)
     wx.hideLoading();
   });

    wx.getUserProfile({ //获取用户信息。页面产生点击事件（例如 button 上 bindtap 的回调中）后才可调用，每次请求都会弹出授权窗口，用户同意后返回 userInfo,用于替换 wx.getUserInfo
      lang: 'zh_CN', //显示用户信息的语言
      desc: '用于在后台更好的识别您的身份', //声明获取用户个人信息后的用途
      success(res) { //接口调用成功的回调函数
        console.log('获取', res)
        wx.setStorageSync('userInfo', res.userInfo); // userInfo 本地缓存指定的 key  res.userInfo 需要存储的数据
        // wx.setStorageSync('userInfo', res.userInfo); 第一个参数为本地缓存指定的 key 
        // 第二个参数为 res.userInfo 为要需要存储的数据信息 这里要把 res.userInfo 获取到的用户信息列表，存储在userInfo 列表里面
        t.setData({ //对 userInfo 进行数据更改，赋值
            userInfo: res.userInfo, //把获取到的数据列表赋值给 userInfo 改变里面的数据
            avatarUrl: res.userInfo.avatarUrl, //把头像地址赋值给 avatarUrl
            hasUserInfo: true,
          }),
          wx.switchTab({ //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 就是首页  
            //用户授权成功后就要跳转到首页导航栏
            url: "/pages/index/index",
          }); // 进入到首页后，出现消息提示窗，提示用户:'欢迎使用本小程序'的提示语
        wx.showToast({ //显示消息提示框
          icon: "success", //显示成功图标，此时 title 文本最多显示 7 个汉字长度
          title: '欢迎使用本程序',
          duration: 1000, //提示的延迟时间 为1s 1000ms=1s
        });
      },
      fail(err) { //接口调用失败的回调函数 用户拒绝授权登录后，出现的提示窗
        console.error(err) //打印输出错误数据
        console.error("123")
        wx.showToast({ // 拒绝登录 显示消息提示框 
          title: '用户拒绝授权', // 提示用户：'用户拒绝授权'
          icon: "error",
          duration: 1000 // 提示语出现时间延迟1s
        });
      }
    })
  },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.setData({
            userInfo: wx.getStorageSync('userInfo') // 更新存储里面的 key ：userInfo
          })
    },
    // getUserProfile() {
    //     wx.getUserProfile({
    //       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //       success: (res) => {
    //         this.setData({// 更新数据和给字段赋值
    //           avatarUrl: res.userInfo.avatarUrl,// 更新用户图像列表
    //           userInfo: res.userInfo,// 更新用户列表列表信息
    //           hasUserInfo: true,
    //         })
    //       }
    //     })
    //   },
    
    //   onGetUserInfo: function (e) {
    //     if (!this.data.logged && e.detail.userInfo) {
    //       this.setData({
    //         logged: true,
    //         avatarUrl: e.detail.userInfo.avatarUrl,
    //         userInfo: e.detail.userInfo,
    //         hasUserInfo: true,
    //       })
    //     }
    //   },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
       })