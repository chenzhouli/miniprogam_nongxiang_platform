// pages/classification/classification.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cateItems: [{
            cate_id: 1,
            cate_name: "蔬菜",
            ishaveChild: true,
            children: [{
                child_id: 1,
                name: '家常叶菜',
                image: "../../icon/cate/c725cdb015b228b7734c93cdc3edb785.jpeg"
              },
              {
                child_id: 2,
                name: '豆类',
                image: "../../icon/cate/87a42052544d59e813d05c1b26a892b2.jpeg"
              },
              {
                child_id: 3,
                name: '菌菇类',
                image: "../../icon/cate/30403de1a0ff1dc567f111543ebea9be.jpeg"
              },
              {
                child_id: 4,
                name: '葱姜调味',
                image: "../../icon/cate/d53a60229213569a59f5d98d5667f3c5.jpeg"
              }
            ]
          },
          {
            cate_id: 2,
            cate_name: "水果",
            ishaveChild: true,
            children: [{
                child_id: 5,
                name: '瓜类',
                image: "../../icon/cate/c020bcf61ee4f8875bfe202e06379625.jpeg"
              },
              {
                child_id: 6,
                name: '柑橘橙柚',
                image: "../../icon/cate/65dfa8c583d53f9336e373dcb8fe5fcd.jpeg"
              },
              {
                child_id: 7,
                name: '浆果类',
                image: "../../icon/cate/e31a1f735542e160eb1b5efdb61f411f.jpeg"
              },
              {
                child_id: 8,
                name: '热带水果',
                image: "../../icon/cate/a1a31cbcf47d255b068dc4b3d20c1fb9.jpeg"
              }
            ]
          }
        ],
        curNav: 1,
        curIndex: 0
    },
  //事件处理函数
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  bind_detail:function(e){
    let id=e.currentTarget.dataset.id //获取点击产品时拿到的id，就是data-id传过来的值
    // wx.navigateTo跳转页面的方法
    //URL是传递的是详情页的路径，把id拼接传过去就可以啦
    wx.navigateTo({
        url: "../detail_mune/detail_mune?id="+id,
    })
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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