// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
      text:["../../icon/5c2f114de6d323908267e5f1d4887073.jpeg","../../icon/17a639263ae6ead0d92f36ef7b2ccb13.jpeg","../../icon/169ebd7d9759ad58b68aa02b2954b68a.jpeg"],
   
  },
  // 事件处理函数
  uploading(){
    wx.navigateTo({
        url: '../../pages/file/file'
      })
  },
  onLoad() {
      this.gettext();
  },
  gettext(){
    wx.cloud.database().collection("text").get()
      .then(res =>{
          console.log('请求成功',res)
          this.setData({
              text:res.data,
          })
      })
      .catch(res =>{
        console.log('请求失败',res)
                  /* 获取系统信息 */
                  wx.getSystemInfo({
                    success: function (res) {
                      that.setData({
                        winWidth: res.windowWidth,
                        winHeight: res.windowHeight
                      });
                    }
                  })
    });
}

})
