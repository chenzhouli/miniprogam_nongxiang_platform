// pages/dingdan/dingdan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      dingdanlist_a:[{
        name:"白菜",
        num:1,
        price:55,
        sale:66,
        _id:"684266796277fcfe0154db61377b5282",
        image:"https://656e-env-6g948tux97e332ca-1311388574.tcb.qcloud.la/merchandise/%E7%99%BD%E8%8F%9C.jpg"
      },
      {
        name:"胡萝卜",
        num:4,
        price:89,
        sale:656,
        _id:"6842667962709fcd00c0f5d847aa906d",
        image:"https://656e-env-6g948tux97e332ca-1311388574.tcb.qcloud.la/merchandise/%E8%83%A1%E8%90%9D%E5%8D%9C.jpg"
      }
    ],
      dingdanlist:[{}],
      // tab切换  
      currentTab: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getdingdan();
        console.log(this.data.dingdanlist)
    },

    getdingdan(){
      wx.showLoading({
        title: '数据加载中...'
      });
      var that=this;
      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        config: {
          env: this.data.envId
        },
        data: {
          type: 'getcart',
          index:'dingdan'
        }
      }).then((resp) => {
        console.log('请求成功',resp)
        that.setData({
          //haveGetRecord: true,
          dingdanlist: resp.result.data,
        });  
      wx.hideLoading();
      }).catch(resp =>{
        console.log('请求失败',resp)
      });
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
    
    bind_detail:function(e){
      let goods_id=e.currentTarget.dataset.goods_id //获取点击产品时拿到的id，就是data-id传过来的值
      wx.navigateTo({
          url: "../detail/detail?goods_id="+goods_id,
      })
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