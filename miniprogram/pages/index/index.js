// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
      text:[],
   
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
    });
}

})
