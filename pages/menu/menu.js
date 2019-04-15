// pages/menu/menu.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: [0, 0, 0, 0]
  },
  //my funtions
  disable: function()
  {
    wx.showToast({
      title: '该内容尚未上线',
      icon: 'loading',
      duration: 1000
    })
  },

  setActive: function(e)
  {
    const that = this;
    var id = e.target.dataset.id;
    that.data.active[id] = (that.data.active[id] + 1) % 2;
    that.setData({
      active: that.data.active
    })
  },

  back:function()
  {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  gotoKanaLearn:function()
  {
    wx.navigateTo({
      url: '../kanaLearn/select/select',
      })
  },

  gotoU1S1:function()
  {
    wx.navigateTo({
      url: '../context/U1/S1/S1',
    })
  },

  gotoU1S2: function () {
    wx.navigateTo({
      url: '../context/U1/S2/S2',
    })
  },
  gotoU1S3: function () {
    wx.navigateTo({
      url: '../context/U1/S3/S3',
    })
  },
  gotoU1S4: function () {
    wx.navigateTo({
      url: '../context/U1/S4/S4',
    })
  },
  gotoU1UR: function () {
    wx.navigateTo({
      url: '../context/U1/UR/UR',
    })
  },
  gotoU2S1: function () {
    wx.navigateTo({
      url: '../context/U2/S1/S1',
    })
  },

  gotoU3S1: function () {
    wx.navigateTo({
      url: '../context/U3/S1/S1',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options)
  {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () 
  {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () 
  {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () 
  {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () 
  {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () 
  {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () 
  {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () 
  {}
})