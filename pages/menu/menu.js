// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active : false,
  },
  //my funtions
  setActive:function()
  {
    if(this.data.active)
    {
      this.setData({
        active: false,
      })
    }
    else
    {
      this.setData({
        active: true,
      })
    }
  },
  back:function()
  {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  gotoKanaLearn:function()
  {
    wx.redirectTo({
      url: '../kanaLearn/select/select',
      })
  },
  gotoTestFunction:function()
  {
    wx.redirectTo({
      url: '../test/test1',
      })
  },
  gotoFirstSection:function()
  {
    wx.redirectTo({
      url: '../context/theFirstUnit/theFirstSection',
    })
  },
  gotoSecondSection: function () {
    wx.redirectTo({
      url: '../context/theFirstUnit/theSecondSection',
    })
  },
  gotoThirdSection: function () {
    wx.redirectTo({
      url: '../context/theFirstUnit/theThirdSection',
    })
  },
  gotoFourthSection: function () {
    wx.redirectTo({
      url: '../context/theFirstUnit/theFourthSection',
    })
  },
  gotoSecondUnit: function () {
    wx.redirectTo({
      url: '../context/theSecondUnit/theFirstSection',
    })
  },
  gotoThirdUnit: function () {
    wx.redirectTo({
      url: '../context/theThirdUnit/theFirstSetion',
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