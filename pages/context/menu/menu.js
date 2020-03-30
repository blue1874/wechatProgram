// pages/context/menu/menu.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: [false, false, false, false],
    units: [],
  },

  //my funtions
  disable: function() {
    wx.showToast({
      title: '该内容尚未上线',
      icon: 'loading',
      duration: 1000
    })
  },

  setActive: function(e) {
    const that = this;
    var id = e.target.dataset.id;
    var active = that.data.active;
    for (var i = 0; i < active.length; i++) {
      if (i == id) active[i] = active[i] ? false : true;
      else active[i] = false;
    }
    that.setData({
      active: active
    })
  },

  back: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  gotoKanaLearn: function() {
    wx.navigateTo({
      url: '../kanaLearn/select/select',
    })
  },
  //传递section参数到select页面
  gotoSelect: function(e) {
    var index = e.target.dataset.index;
    wx.navigateTo({
      url: '../context/select/select?section=' + index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    wx.showLoading({
      title: '数据加载中',
    })
    wx.cloud.callFunction({
        name: 'inquire',
        data: {
          type: "contextIndex",
        },
      }).then(res => {
        wx.hideLoading();
        console.log('返回数据:', res);
        that.setData({
          units: res.result.data,
        })
      })
      .catch(console.error)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})