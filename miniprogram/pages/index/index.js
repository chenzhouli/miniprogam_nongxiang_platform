// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
      text:[
          {img:"../../icon/5c2f114de6d323908267e5f1d4887073.jpeg",title:111},
          {img:"../../icon/17a639263ae6ead0d92f36ef7b2ccb13.jpeg",title:222},
          {img:"../../icon/169ebd7d9759ad58b68aa02b2954b68a.jpeg",title:333},
          {img:"../../icon/biaoqian.png",title:444},
          {img:"../../icon/daohang.png",title:555}]
  },
  // 事件处理函数
  uploading(){
    wx.navigateTo({
        url: '../../pages/file/file'
      })
  },

  bindetail_txt(){
      wx.navigateTo({
        url: '../../pages/detail_txt/detail_txt',
      })
  },
  onLoad() {
     
  },


})
