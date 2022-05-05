// pages/adopt/adopt.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    /**  * 页面配置  */
    winWidth: 0,
    winHeight: 0,
    landlist:[{}]
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
        this.getland_info();
    },
    
    getland_info(){
      wx.showLoading({
        title: '数据加载中...'
        });

      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        config: {
          env: this.data.envId
        },
        data: {
          type: 'selectAllland',
        }
      }).then((resp) => {
        console.log('请求成功',resp)
        this.setData({
          //haveGetRecord: true,
          landlist: resp.result.data
        });
       wx.hideLoading();
     }).catch(resp =>{
      console.log('请求失败',resp)
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