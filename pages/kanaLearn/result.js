// pages/kanaLearn/result.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalNumber:0,
    percentage:0
  },
  //my function
  gotoMenu:function(){
    wx.redirectTo({
      url: '../menu/menu',
    })
  },
  gotoRecog:function(){
    wx.redirectTo({
      url: '../kanaLearn/kanaRecog',
    })
  },
  gotoSelect:function(){
   wx.redirectTo({
      url: '../kanaLearn/select',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var correctNumber=options.cN;
    var totalNumber=app.globalData.kanaNumber;
    var percentage = (parseInt(correctNumber * 10000 / totalNumber))/100;
    console.log('正确率为：', correctNumber, '/', totalNumber)
    console.log('百分化后为：',percentage,'%')
    this.setData({ totalNumber: totalNumber,percentage:percentage})
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