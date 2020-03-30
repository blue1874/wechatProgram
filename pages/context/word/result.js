// pages/context/U1/S1/word/result.js
const app = getApp();
var wxCharts = require('../../../utils/wxcharts.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongWord: [],
    correctNumber: 0,
    totalNumber: 0,
    percentage: 0,
    wrongFlag: true,
    foldState: true,
    section: '',
    pieChart: null,
    showDialog: false,
  },
  //my function
  //返回主菜单
  gotoMenu: function() {
    const that = this;
    wx.redirectTo({
      url: '/pages/menu/menu',
    })
  },
  //再来一次（0为保持原选择数组进入识别界面，1为择错数组替换选择数组进入识别界面）
  gotoRecog: function(e) {
    const that = this;
    if (e.target.dataset.mode == 1) {
      wx.redirectTo({
        url: '../word/recog?chosenWord=' + JSON.stringify(that.data.wrongWord) + '&section=' + that.data.section,
      })
    } else {
      wx.redirectTo({
        url: '../word/recog?chosenWord=' + JSON.stringify(that.data.chosenWord) + '&section=' + that.data.section,
      })
    }
  },
  //重新选择
  gotoSelect: function() {
    const that = this;
    wx.redirectTo({
      url: '../select/select?section=' + that.data.section,
    })
  },

  openDialog: function () {
    this.setData({
      showDialog: true
    })
  },
  closeDialog: function () {
    this.setData({
      showDialog: false
    })
  },

  //折叠显示
  // unfold: function() {
  //   const that = this;
  //   that.setData({
  //     foldState: !that.data.foldState
  //   })
  //   console.log('unfold triggered')
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受正确个数并计算正确率
  onLoad: function(options) {
    const that = this;
    that.data.wrongWord = JSON.parse(options.wrongWord);
    that.data.chosenWord = JSON.parse(options.chosenWord);
    that.data.section = options.section;
    console.log("section", options.section)
    var correctNumber = that.data.chosenWord.length - that.data.wrongWord.length;
    var totalNumber = that.data.chosenWord.length;
    var percentage = (parseInt(correctNumber * 10000 / totalNumber)) / 100;
    console.log('wrongWord：', that.data.wrongWord)
    console.log('correctNumber：', correctNumber)
    console.log('正确率为：', correctNumber, '/', totalNumber)
    console.log('百分化后为：', percentage, '%')
    that.setData({
      totalNumber: totalNumber,
      percentage: percentage,
      correctNumber: correctNumber,
      wrongWord: that.data.wrongWord,
      chosenWord: that.data.chosenWord,
      section: that.data.section
    })
    if (that.data.wrongWord.length == 0) that.setData({
      wrongFlag: false
    });
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    var pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '正确单词',
        data: correctNumber,
      },
      {
        name: '错误单词',
        data: totalNumber - correctNumber,
      }
      ],
      width: windowWidth,
      height: 250,
      dataLabel: true,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})