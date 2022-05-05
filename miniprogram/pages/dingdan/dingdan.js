// pages/dingdan/dingdan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topImgs:[],
        goods_info:[{}],

     // tab切换  
    currentTab: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

        /**  * 点击tab切换  */
        swichNav: function (e) {
            var that = this;
            if (this.data.currentTab === e.target.dataset.current) {
              return false;
            } else {
              that.setData({
                currentTab: e.target.dataset.current
              })
            }
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