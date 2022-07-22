// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:"",
        goods_select:[{}],
        goods_info:[{}]
    },

    bind_detail:function(e){
        let goods_id=e.currentTarget.dataset.goods_id //获取点击产品时拿到的id，就是data-id传过来的值
        wx.navigateTo({
            url: "../detail/detail?goods_id="+goods_id,
        })
    },

    binbuycar(){
        wx.navigateTo({
          url: '../../pages/buy_car/buy_car',
        })
      },

    handleSearch(event){
      var value=event.detail;
      var subjects=new Array();
      if(!value || value === ""){
        return;
      }
      for (var i=0;i<this.data.goods_info.length;i++){
        if(this.data.goods_info[i].name.indexOf(value)>=0){
          subjects.push(this.data.goods_info[i]);
        }
      }
      console.log('subjects',subjects);
      wx.setStorage({
        key: 'searchresult',
        data: subjects
      })

      // //跳转到搜索结果页面
      // wx.navigateTo({
      //   url: '../search/search',
      // })
      var that=this;
      that.onLoad();
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      //获得搜索结果
      wx.getStorage({
        key: 'searchresult',
        success: (res) => {
          console.log("获取搜索结果",res);
          this.setData({
            goods_select:res.data
          })
        }
      });
      //获得商品信息
      wx.getStorage({
        key:'goods_info',
        success: (res) => {
          console.log("获取商品",res);
          this.setData({
            goods_info:res.data
          })
        }
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