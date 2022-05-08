// pages/file/file.js
var app=getApp(); 
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 被选中的图片路径 数组
    chooseImgs: [],
    cloudpath:[], 
    haveGetImgSrc:false
    //count:0
    },

    handleChooseImg() { 
      wx.showLoading({ 
        title: '', 
      });
        // 2 调用小程序内置的选择图片app
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
              haveGetImgSrc:true
            }) 
            //console.log('path',this.data.chooseImgs); 
            wx.hideLoading(); 
          } 
        }); 
      }, 
   
      handleFormSubmit(){ 
        // getname(); 
        // getphonenumber(); 
        // getaddress(); 
        // 将图片上传至云存储空间 
        if(this.data.haveGetImgSrc){
          var rand=Math.round(Math.random()*1000);
          for(var i=0;i<9;i++){ 
                if(this.data.chooseImgs[i]){ 
                  wx.cloud.uploadFile({ 
                  // 指定上传到的云路径 
                    cloudPath: 'upload_emptyland/emptyland'+rand+'/'+i+'.png', 
                  // 指定要上传的文件的小程序临时文件路径 
                    filePath: this.data.chooseImgs[i], 
                    config: { 
                      env: this.data.envId 
                    } 
                  }).then(res => { 
                    console.log('上传成功', res); 
                    //cloudpath有点问题 
                    this.setData({ 
                      haveGetImgSrc: true, 
                      //cloudpath: [...this.data.cloudPath,...res.fileID] 
                    }); 
                      //console.log('cloudpath',cloudpath); 
                  wx.showToast({
                    title: '上传成功',
                    icon: 'success',
                    duration: 2000
                  });
                  }).catch((e) => { 
                   console.log(e); 
                   wx.hideLoading(); 
                  }); 
                }
            }
        }else{
          wx.showToast({
            title: '请上传相关资料',
            icon: 'error',
            duration: 2000
          });
        }
      },
      
      // 根据索引删除上传的图片
  handleRemoveImg(e){
    // 1 获取被点击的组件的索引
    const {index} = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset); 
    // 2 获取data中的图片数组
    let { chooseImgs } = this.data;
    // 3 删除元素
    chooseImgs.splice(index, 1);
    this.setData({
      chooseImgs
    })
  },
    
  // 查看大图 
  handleImagePreview(e) { 
    const {index} = e.currentTarget.dataset; 
    const chooseImgs = this.data.chooseImgs; 
    wx.previewImage({ 
      current: chooseImgs[index], //当前预览的图片 
      urls: chooseImgs, //所有要预览的图片 
    }) 
  },

  getname:function (options){ 
    app.globalData.landname = options.detail.value; 
  }, 

  getphonenumber:function (options){ 
    app.globalData.landnumber = options.detail.value; 
  }, 

  getaddress:function (options){ 
    app.globalData.landaddress = options.detail.value; 
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