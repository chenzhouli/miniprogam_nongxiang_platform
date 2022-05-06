// pages/detail_txt/detail_txt.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      images:[{}],
      addLike:{add:false,url:"../../icon/xihuan.png"}//是否收藏、图标

    },
    funLike:function(){
      var add = this.data.addLike.add;
    //   console.log(add);
      if(add){
          this.setData({
              addLike:{
                  add: false,
                  url: '../../icon/xihuan.png'
              }
          })
      }else{
          this.setData({
              addLike: {
                  add: true,
                  url: '../../icon/xihuan2.png'
              }
          })
      }
  },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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

    },

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