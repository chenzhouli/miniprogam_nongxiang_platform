// pages/detail_tudi/detail_tudi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:"",
        tudi_img:"",//图片
        tudi_title:"",//土地名称
        tudi_price:"",//金额
        detailImg:"",//详情照片
        tudi_add:"",//地址
        tudi_chra:"",//土地适中产物

        swiperList:[],

    },
      //选择认养
  immeBuy() {
    wx.navigateTo({
      url: '../pay/pay',
    })
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