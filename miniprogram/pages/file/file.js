// pages/file/file.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images: [],

    },
    chooseImage: function (e) {
        wx.chooseImage({
          sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
          sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
          success: res => {
            const images = this.data.images.concat(res.tempFilePaths)
            this.setData({
              images: images
            })
          }
        })
      },
      // 删除图片
      removeImage(e) {
        const idx = e.target.dataset.idx;
        this.data.images.splice(idx, 1);
        var del_image = this.data.images;
        this.setData({
          images: del_image
        })
      },
      // 查看大图
      handleImagePreview(e) {
        const idx = e.target.dataset.idx
        const images = this.data.images
        wx.previewImage({
          current: images[idx], //当前预览的图片
          urls: images, //所有要预览的图片
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