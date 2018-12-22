Page({
  data: {
    imgUrls: [
      '/images/02.jpg',
      '/images/03.jpg',
      '/images/01.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    opacity: 1,
    disabled: false,
    threshold: 0,
    rule: 'up',
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://xxx/?page=0',
      method: "GET",
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        that.setData({
          moment: res.data.data
        });
        // 设置数组元素
        that.setData({
          moment: that.data.moment
        });
        console.log(that.data.moment);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })
  },

  send: function () {
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/505096127/datapoints?datastream_id=hongwai,Light',
      header: {
        'content-type': 'application/json',
        'api-key': 'eoRo3Eb=3mIMTGpLcLnlTFc4jsw= '
      },
      success: function (res) {
        var app = getApp()
        var that = this

        app.globalData.hongwai = res.data.data.datastreams[1]
        app.globalData.light = res.data.data.datastreams[0]
        var hongwai = app.globalData.hongwai.datapoints[0].value
        var light = app.globalData.light.datapoints[0].value
        console.log(app.globalData.homhwai)
        console.log(app.globalData.light)

        //从这里开始修改

        if (hongwai == 1 || light > 300) {
          wx.showModal({
            title: '蓝廋',
            content: '厕所有人嗷，小主请稍等~',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if ((hongwai == 0 || light > 300) && (hongwai == 1 || light < 300)) {
          wx.showModal({
            title: '哎哟',
            content: '厕所可能有人，小主可前去问问哦~',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else {
          wx.showModal({
            title: '命中！',
            content: '这是小主的御用厕所嗷~',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  /*之后可以查看其他参与共享计划的厕所的状态

  send: function () {
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/505096127/datapoints?datastream_id=hongwai,Light', 
      header: {
        'content-type': 'application/json',
        'api-key': 'eoRo3Eb=3mIMTGpLcLnlTFc4jsw= '
      },
      success: function (res) {
        var app = getApp()
        var that = this

        app.globalData.hongwai = res.data.data.datastreams[1]
        app.globalData.light = res.data.data.datastreams[0]
        var hongwai = app.globalData.hongwai.datapoints[0].value
        var light = app.globalData.light.datapoints[0].value
        console.log(app.globalData.homhwai)
        console.log(app.globalData.light)

        //从这里开始修改

        if (hongwai == 1 || light > 300) {
          wx.showModal({
            title: '蓝廋',
            content: '厕所有人嗷，小主请稍等~',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if ((hongwai == 0 || light > 300) && (hongwai == 1 || light < 300 )) {
          wx.showModal({
            title: '哎哟',
            content: '厕所灯亮着，小主可前去问问哦~',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else  {
          wx.showModal({
            title: '命中！',
            content: '这是小主的御用厕所嗷~',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  
  */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

