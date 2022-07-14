//const { privateEncrypt } = require("crypto");

// pages/detail_mune/detail_mune.js
Page({
    data: {
      id:"",
      currentTab: 0,  // tab切换
      goods_info_price:[{}],
      goods_info_sale:[{}],
    },
    
    bind_detail:function(e){
        let goods_id=e.currentTarget.dataset.goods_id //获取点击产品时拿到的id，就是data-id传过来的值
        wx.navigateTo({
            url: "../detail/detail?goods_id="+goods_id,
        })
    },

    bindChange: function (e) {
        var that = this;
        that.setData({ currentTab: e.detail.current });
    },

    /* 点击tab切换  */
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
        console.log(this.data.id);
        this.getcategory();
    },
     
    getcategory(){
      //价格
      wx.showLoading({
        title: '数据加载中...'
      });
      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        config: {
          env: this.data.envId
        },
        data: {
          type:'selectcategory',
          index:'price',
          cate:this.data.id
        }
      }).then((resp) => {
      console.log('请求成功',resp);
      this.setData({
        goods_info_price: resp.result.data
      });
      wx.hideLoading();
      }).catch(resp =>{
      console.log('请求失败',resp);
      });
      //销量
      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        config: {
          env: this.data.envId
        },
        data: {
          type: 'selectcategory',
          index:'sale',
          cate:this.data.id
        }
      }).then((resp) => {
        console.log('请求成功',resp);
        this.setData({
          goods_info_sale: resp.result.data
        });
      wx.hideLoading();
      }).catch(resp =>{
      console.log('请求失败',resp);
      });
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