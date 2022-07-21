// pages/dingdan/dingdan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    dingdanlist:[],
     // tab切换  
    currentTab: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getdingdan().then(res =>{ //请求成功的时候进行下一步流程，这样就可以避免异步问题

            　　　　console.log(res);
            
            　　}).catch(err =>{  //请求失败
            
            　　　　console.log(err);
            
            　　});
        console.log(this.data.dingdanlist)
    //    var pages = getCurrentPages(); //当前页面
      //  var beforePage = pages[pages.length - 2]; //前一页
       // beforePage.onLoad(); // 执行前一个页面的onLoad方法
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
      // wx.navigateTo跳转页面的方法
      //URL是传递的是详情页的路径，把id拼接传过去就可以啦
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