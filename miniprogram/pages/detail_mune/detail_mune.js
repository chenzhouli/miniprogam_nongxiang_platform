// pages/detail_mune/detail_mune.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:"",
            // tab切换  
    currentTab: 0,
    },
    bind_detail:function(e){
        let goods_id=e.currentTarget.dataset.goods_id //获取点击产品时拿到的id，就是data-id传过来的值
        // wx.navigateTo跳转页面的方法
        //URL是传递的是详情页的路径，把id拼接传过去就可以啦
        wx.navigateTo({
            url: "../detail/detail?goods_id="+goods_id,
        })
    },
    bindChange: function (e) {
        var that = this;
        that.setData({ currentTab: e.detail.current });
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
    binbuycar(){
        wx.navigateTo({
            url: '../../pages/buy_car/buy_car',
          })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      // options.id 就是首页传过来的id，接下来循环找到id所匹配的数据就可以进行渲染啦！
        this.setData({
          id:options.id
        })
        console.log(this.data.id)
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