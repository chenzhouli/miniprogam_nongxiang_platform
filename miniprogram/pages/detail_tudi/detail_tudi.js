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
    // wx.navigateTo({
    //   url: '../pay/pay',
    // })
    wx.cloud.callFunction({ 
      name: 'quickstartFunctions', 
      config: { 
        env: this.data.envId 
      }, 
      data: { 
        type: 'addmyland', 
        id:this.data.id 
      } 
    }).then((resp) => { 
      console.log('请求成功',resp); 
      wx.showToast({ 
        title: '认养成功', 
        icon: 'success', 
        duration: 2000 
      }); 
    }).catch(resp =>{ 
      console.log('已认养，请勿重复操作',resp) 
    }); 
},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.showLoading({
        title: '数据加载中...'
        });

      this.setData({
        id:options.tudi_id
      })

      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        config: {
          env: this.data.envId
        },
        data: {
          type: 'selectgoods',
          id: options.tudi_id,
          index:'empty_land'
        }
      }).then((resp) => {
        console.log('请求成功',resp);
        //console.log(resp.result.data[0]);

        this.setData({
          tudi_img:resp.result.data[0].image,
          tudi_title:resp.result.data[0].name,
          tudi_price:resp.result.data[0].price,
          tudi_add:resp.result.data[0].address,
          tudi_chra:resp.result.data[0].chra,
          tudi_area:resp.result.data[0].area
        });
        wx.hideLoading();
      }).catch(resp =>{
        console.log('请求失败',resp)
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