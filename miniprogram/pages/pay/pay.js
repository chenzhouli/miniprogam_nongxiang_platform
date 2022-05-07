// pages/pay/pay.js
var app=getApp(); 
Page({

    /**
     * 页面的初始数据
     */
    data: {
    consigneeName: "", //收货人姓名
    phone: "",//电话
    detailedAddress: "",//地址
    },

     /** 
   * 输入框实时回调 
   */ 
  getusername: function (options) { 
    //获取输入框输入的内容 
    //console.log('options',options); 
    app.globalData.goodsname = options.detail.value; 
  }, 
 
  getuserphone: function (options) { 
    //获取输入框输入的内容 
    //console.log('options',options); 
    app.globalData.goodsnumber = options.detail.value; 
  }, 
  getuseraddress: function (options) { 
    //获取输入框输入的内容 
    //console.log('options',options); 
    app.globalData.goodsaddress = options.detail.value; 
  }, 

      binpay(){
        // this.getusername(); 
        // this.getuserphone(); 
        // this.getuseraddress(); 
        console.log('app',app.globalData) 
        wx.showToast({
            title: '购买成功',
            icon: 'success',
            duration: 2000
          });
        setTimeout(function(){
        wx.redirectTo({
          url: '../../pages/dingdan/dingdan',
        })},2000)
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