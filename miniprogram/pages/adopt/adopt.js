// pages/adopt/adopt.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    /**  * 页面配置  */
    winWidth: 0,
    winHeight: 0,
    
          dataList: [{
            goods_id: 1,
            goods_title: '商品标题1',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '60'
          }, {
            goods_id: 1,
            goods_title: '商品标题2',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '70'
          }, {
            goods_id: 1,
            goods_title: '商品标题3',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '80'
          }, {
            goods_id: 1,
            goods_title: '商品标题4',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '90'
          }, {
            goods_id: 1,
            goods_title: '商品标题5',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '110'
          }],
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        /* 获取系统信息 */
        wx.getSystemInfo({
          success: function (res) {
            that.setData({
              winWidth: res.windowWidth,
              winHeight: res.windowHeight
            });
          }
        });

    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})