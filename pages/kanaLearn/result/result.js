// pages/kanaLearn/result.js
const app = getApp();
var wxCharts = require('../../../utils/wxcharts.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongKana: [],
    selectedKana: [],
    //wrongLength: 0,
    //correctNumber: 0,
    //totalNumber: 0,
    percentage: 0,
    wrongFlag: true,
    showDialog: false,
    pieChart: null,
  },
  //my function
  //再来一次（0为保持原选择数组进入识别界面，1为择错数组替换选择数组进入识别界面）
  gotoRecog: function(e) {
    if (e.target.dataset.mode == 1) {
      if (this.data.wrongKana.length == 0) {
        console.log("No wrong Kana"); //判断是否错误个数为零
        return;
      }
      this.data.selectedKana = this.data.wrongKana;
      this.data.kanaNumber = this.data.selectedKana.length;
    }
    this.data.wrongKana = [];
    wx.redirectTo({
      url: '../kanaRecog/kanaRecog?selectedKana=' + JSON.stringify(this.data.selectedKana),
    })

  },
  //重新选择
  gotoSelect: function() {
    wx.redirectTo({
      url: '../select/select',
    })
  },
  openDialog: function() {
    this.setData({
      showDialog: true
    })
  },
  closeDialog: function() {
    this.setData({
      showDialog: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受正确个数并计算正确率
  onLoad: function(options) {
    var wrongKana = JSON.parse(options.wrongKana);
    var selectedKana = JSON.parse(options.selectedKana);
    //var wrongLength = this.data.wrongKana.length;
    var correctNumber = selectedKana.length - wrongKana.length;
    var percentage = (parseInt(correctNumber * 10000 / selectedKana.length)) / 100;
    console.log('正确率为：', correctNumber, '/', selectedKana.length)
    console.log('百分化后为：', percentage, '%')
    this.setData({
      percentage: percentage,
      // correctNumber: correctNumber
    })
    if (wrongKana.length == 0) this.setData({
      wrongFlag: false
    });
    var temp;
    for (let i = 0; i < wrongKana.length - 1; i++) {
      for (let j = 0; j < wrongKana.length - 1 - i; j++) {
        if (wrongKana[j] > wrongKana[j + 1]) {
          temp = wrongKana[j];
          wrongKana[j] = wrongKana[j + 1];
          wrongKana[j + 1] = temp;
        }
      }

    };
    this.setData({
      wrongKana: wrongKana,
      selectedKana: selectedKana,
    })
    console.log("selectedKana: ", this.data.selectedKana);
    console.log("wrongKana: ", this.data.wrongKana);

    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    var pieChart  = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
          name: '正确假名',
          data: selectedKana.length - wrongKana.length,
        },
        {
          name: '错误假名',
          data: wrongKana.length,
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