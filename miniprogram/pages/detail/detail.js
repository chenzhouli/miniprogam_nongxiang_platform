// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods_img:"",//匹配的数据
        goods_title:"",
        goods_xiaoliang:"",
        goods_price:"",
        detailImg:"",
        dataList: [{
            goods_id: 1,
            goods_title: '商品标题1',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '60'
          }, {
            goods_id: 2,
            goods_title: '商品标题2',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '70'
          }, {
            goods_id: 3,
            goods_title: '商品标题3',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '80'
          }, {
            goods_id: 4,
            goods_title: '商品标题4',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '90'
          }, {
            goods_id: 5,
            goods_title: '商品标题5',
            goods_img: '../../icon/logo.jpg',
            goods_xiaoliang: '0',
            goods_price: '110'
          }],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
            // options.id 就是首页传过来的id，接下来循环找到id所匹配的数据就可以进行渲染啦！
    this.data.dataList.forEach(item => {
        if (options.goods_id == item.goods_id) {
          this.setData({
            goods_img:item.goods_img,
            goods_title:item.goods_title,
            goods_price:item.goods_price,
            goods_xiaoliang:item.goods_xiaoliang
          })
        }
      })
    },
    //加入购物车
    
        // 跳到购物车
    binbuycar() {
    wx.navigateTo({
      url: '../buy_car/buy_car',
    })
  },
  //立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
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