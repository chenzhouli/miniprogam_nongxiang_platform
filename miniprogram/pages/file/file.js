// pages/file/file.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 被选中的图片路径 数组
    chooseImgs: [],
    },

    handleChooseImg(e) {
        // 2 调用小程序内置的选择图片api
        wx.chooseImage({
          // 同时选中的图片的数量
          count: 9,
          // 图片的格式  原图  压缩
          sizeType: ['original', 'compressed'],
          // 图片的来源  相册  照相机
          sourceType: ['album', 'camera'],
          success: (result) => {
            this.setData({
              // 图片数组 进行拼接 
              chooseImgs: [...this.data.chooseImgs, ...result.tempFilePaths],
            })
          }
        });
      },
      
      // 根据索引删除上传的图片
  handleRemoveImg(e){
    // 1 获取被点击的组件的索引
    const {index} = e.currentTarget.dataset;
    // 2 获取data中的图片数组
    let { chooseImgs } = this.data;
    // 3 删除元素
    chooseImgs.splice(index, 1);
    this.setData({
      chooseImgs
    })
  },
    // 外网的图片的路径数组
    UpLoadImgs: [],
  
      // 查看大图
      handleImagePreview(e) {
        const {index} = e.currentTarget.dataset;
        const chooseImgs = this.data.chooseImgs;
        wx.previewImage({
          current: chooseImgs[index], //当前预览的图片
          urls: chooseImgs, //所有要预览的图片
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