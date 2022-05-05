// pages/buy_car/buy_car.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsNum:'',
        userInfo: {},
        haveGetcart: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        cartlist:[{}],
        allSelect: "circle",
        num: 0,
        count: 0,
        lastX: 0,
        lastY: 0,
        text: "没有滑动",
    
    },
    change: function (e) {
        var that = this
        var index = e.currentTarget.dataset.index
        var select = e.currentTarget.dataset.select
        //判断要不要勾选全选按钮
        for (var i = 0; i < that.data.cartlist.length; i++) {
          if(i != index){
            if(that.data.cartlist[i].select == "circle"){
              break;
            }
          }
        }

        if (select == "circle") {
          var stype = "success"
          if(i == that.data.cartlist.length){
            this.setData({
              allSelect: "success"  //勾上
            })
          }
        } else {
          var stype = "circle"
          if(i == that.data.cartlist.length){
            this.setData({
              allSelect: "circle"  //不勾上
            })
          }
        }
        var newList = that.data.cartlist
        newList[index].select = stype
        that.setData({
          cartlist: newList
        })
        
        that.countNum()
        that.count()
      },
        //全选
  allSelect: function (e) {
    var that = this
    var allSelect = e.currentTarget.dataset.select //先判断是否选中
    var newList = that.data.cartlist
    //console.log(newList)
    if (allSelect == "circle") {
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "success"
      }
      var select = "success"
    } else {
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "circle"
      }
      var select = "circle"
    }
    that.setData({
      cartlist: newList,
      allSelect: select
    })
    that.countNum()
    that.count()
  },

    addtion: function (e) {//添加商品
        var that = this
        var index = e.currentTarget.dataset.index
        //var num = e.currentTarget.dataset.num
        var id = that.data.cartlist[index]._id
        // if (num < 99) { //默认峰值99件
        //   num++
        // }
        // var newList = that.data.slideProductList
        // newList[index].num = num
        // that.setData({
        //   goodsNum:num,
        //   cartlist: newList
        // })
        wx.showLoading({
          title: '数据加载中...'
          });

        console.log('e',e); 
        wx.cloud.callFunction({ 
          name: 'quickstartFunctions', 
          config: { 
            env: this.data.envId 
          }, 
          data: { 
            type: 'changenum', 
            flag:0, 
            id:id, 
            // index:index, 
            // num:num 
          } 
        }).then((resp) => { 
          console.log('请求成功',resp) 
          this.setData({ 
            cartlist: resp.result.data 
          }); 
          wx.hideLoading();
        }).catch(resp =>{ 
          console.log('请求失败',resp) 
        }); 
        that.countNum()
        that.count()
      },
      subtraction: function (e) {//减少商品
        var that = this
        var index = e.currentTarget.dataset.index
        var id = that.data.cartlist[index]._id
        //var num = e.currentTarget.dataset.num
        //var newList = that.data.slideProductList
        //当1件时，再次点击移除该商品
        // if (num == 1) {
        //   newList.splice(index, 1)
        // } else {
        //   num--
        //   newList[index].num = num
        // }
        // that.setData({
        //   goodsNum: num,
        //   slideProductList: newList
        // })
        wx.showLoading({
          title: '数据加载中...'
          });

        wx.cloud.callFunction({ 
          name: 'quickstartFunctions', 
          config: { 
            env: this.data.envId 
          }, 
          data: { 
            type: 'changenum', 
            flag:1, 
            id:id, 
            // index:index, 
            // num:num 
          } 
        }).then((resp) => { 
          console.log('请求成功',resp) 
          this.setData({ 
            cartlist: resp.result.data 
          }); 
          wx.hideLoading();
        }).catch(resp =>{ 
          console.log('请求失败',resp) 
        }); 
        that.countNum()
        that.count()
      },

      countNum: function () { //计算数量
        var that = this
        var newList = that.data.cartlist
        var allNum = 0
        for (var i = 0; i < newList.length; i++) {
          if (newList[i].select == "success") {
            allNum += parseInt(newList[i].num)
          }
        }
        parseInt
        that.setData({
          num: allNum
        })
      },

      count: function () {//计算金额方法
        var that = this
        var newList = that.data.cartlist
        var newCount = 0
        for (var i = 0; i < newList.length; i++) {
          if (newList[i].select == "success") {
            newCount += newList[i].num * newList[i].price
          }
        }
        that.setData({
          count: newCount
        })
      },  

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var width=wx.getSystemInfoSync().windowWidth
        var height=wx.getSystemInfoSync().windowHeight
        height=height-55-53;
        this.setData({
          height:height
        })
        this.getcartlist(); 
    },
    
    //获得购物车数据库 
    getcartlist(){ 
      wx.cloud.callFunction({ 
        name: 'quickstartFunctions', 
        config: { 
          env: this.data.envId 
        }, 
        data: { 
          type: 'getcart', 
          index:'merchandise_cart'
        } 
      }).then((resp) => { 
        console.log('请求成功',resp) 
        this.setData({ 
          haveGetcart: true, 
          cartlist: resp.result.data 
        }); 
      }).catch(resp =>{ 
        console.log('请求失败',resp) 
      }); 
    }, 

    bindacount(){
      if(this.data.num==0){
        wx.showToast({
          title: '暂无商品！',
          icon: 'success',
          duration: 2000
        });
      }else{
        this.update_dingdan(); //更新订单
        this.update_cart();  //更新购物车
        wx.navigateTo({
            url: '../../pages/pay/pay',
          })
      }
    },

    update_dingdan(){
      var that = this
      var newList = that.data.cartlist
      for (var i = 0; i < newList.length; i++) {
        if (newList[i].select == "success") {
          wx.cloud.callFunction({ 
            name: 'quickstartFunctions', 
            config: { 
              env: this.data.envId 
            }, 
            data: { 
              type: 'add_dingdan', 
              id:newList[i]._id,
              flag:1
            } 
          }).then((resp) => { 
            console.log('更新成功',resp) 
          }).catch(resp =>{ 
            console.log('更新失败',resp) 
          }); 
        }
      }
    },

    update_cart(){
      var that = this
      var newList = that.data.cartlist
      for (var i = 0; i < newList.length; i++) {
        if (newList[i].select == "success"){
          wx.cloud.callFunction({ 
            name: 'quickstartFunctions', 
            config: { 
              env: this.data.envId 
            }, 
            data: { 
              type: 'dele_cart', 
              id:newList[i]._id,
            } 
          }).then((resp) => { 
            console.log('删除成功',resp) 
          }).catch(resp =>{ 
            console.log('删除失败',resp) 
          }); 
        }
      }
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