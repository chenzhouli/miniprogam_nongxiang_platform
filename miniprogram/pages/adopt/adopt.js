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
            tudi_id: 1,
            tudi_title: '商品标题1',
            tudi_img: '../../icon/logo.jpg',
            tudi_xiaoliang: '0',
            tudi_price: '60'
          }, {
            tudi_id: 1,
            tudi_title: '商品标题2',
            tudi_img: '../../icon/logo.jpg',
            tudi_xiaoliang: '0',
            tudi_price: '70'
          }, {
            tudi_id: 1,
            tudi_title: '商品标题3',
            tudi_img: '../../icon/logo.jpg',
            tudi_xiaoliang: '0',
            tudi_price: '80'
          }, {
            tudi_id: 1,
            tudi_title: '商品标题4',
            tudi_img: '../../icon/logo.jpg',
            tudi_xiaoliang: '0',
            tudi_price: '90'
          }, {
            tudi_id: 1,
            tudi_title: '商品标题5',
            tudi_img: '../../icon/logo.jpg',
            tudi_xiaoliang: '0',
            tudi_price: '110'
          }],
    },
    bind_detail:function(e){
        let tudi_id=e.currentTarget.dataset.tudi_id //获取点击产品时拿到的id，就是data-id传过来的值
        // wx.navigateTo跳转页面的方法
        //URL是传递的是详情页的路径，把id拼接传过去就可以啦
        wx.navigateTo({
            url: "../detail_tudi/detail_tudi?tudi_id="+tudi_id,
        })
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