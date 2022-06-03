const { TIMEOUT } = require("dns");

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
        tudi_area:0, //面积
        hideShopPopup: true,
        num:1,
        swiperList:[],

    },
    tobuy: function () {
        this.setData({
          hideShopPopup: false,
        })
      },
      bindMinus: function () {
        var num = this.data.num;
        if (num > 1) {
          num--;
        }
        // 只有大于一件的时候，才能normal状态，否则disable状态  
        var minusStatus = num <= 1 ? 'disabled' : 'normal';
        this.setData({
          num: num,
          minusStatus: minusStatus
        });
      },
      /* 点击加号 */
      bindPlus: function () {
        var num = this.data.num;
        num++;
        var minusStatus = num < 1 ? 'disabled' : 'normal';
        this.setData({
          num: num,
          minusStatus: minusStatus
        });
      },
      /* 关闭购买页面 */
      closePopupTap:function(){
        this.setData({
          hideShopPopup: true
        })  
      },

      //选择认养
  immeBuy() {
    if(this.data.num<=this.data.tudi_area){
      wx.cloud.callFunction({ 
        name: 'quickstartFunctions', 
        config: { 
          env: this.data.envId 
        }, 
        data: { 
         type: 'addmyland', 
         id:this.data.id ,
         num:this.data.num
        } 
      }).then((resp) => { 
       console.log('请求成功',resp); 
        wx.showToast({ 
          title: '认养成功', 
          icon: 'success', 
          duration: 2000 
        }); 
      }).catch(resp =>{ 
        console.log('请求失败',resp) 
        wx.showToast({ 
         title: '认养亩数溢出', 
          icon: 'error', 
          duration: 2000 
        }); 
      }); 
    }else{
      wx.showToast({ 
        title: '认养亩数溢出', 
         icon: 'error', 
         duration: 2000 
       }); 
    }
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

      let pages=getCurrentPages();
      let prevpage=pages[pages.length-2];
      let indexx=''
      console.log(prevpage.route);
      if (prevpage.route=='pages/adopt/adopt'){
        indexx='empty_land'
      }else{
        indexx='my_land'
      }

      wx.cloud.callFunction({
        name: 'quickstartFunctions',
        config: {
          env: this.data.envId
        },
        data: {
          type: 'selectgoods',
          id: options.tudi_id,
          index:indexx
        }
      }).then((resp) => {
        console.log('请求成功',resp);

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