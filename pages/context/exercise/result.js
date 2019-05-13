// pages/context/U1/S1/exercise/result.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    exercises: [],
    wrongExercise: [],
    percentage: 0,
    wrongFlag: true,
    foldState: true,
    correctNumber: 0,
    totalNumber: 0,
    percentage: 0,
    section: '',
  },
  //my function
  //返回主菜单
  gotoMenu: function () {
    wx.redirectTo({
      url: '/pages/menu/menu',
    })
  },
  //再来一次（0为保持原选择数组进入识别界面，1为择错数组替换选择数组进入识别界面）
  gotoRecog: function (e) {
    const that = this;
    if (e.target.dataset.mode == 1) {
      wx.redirectTo({
        url: '../exercise/recog?exercises=' + JSON.stringify(that.data.wrongExercise) + '&section=' + that.data.section,
      })
    }
    else{
      wx.redirectTo({
        url: '../exercise/recog?exercises=' + JSON.stringify(that.data.exercises) + '&section=' + that.data.section,
      })
    }
  },
  //折叠显示
  unfold: function () {
    const that = this;
    that.setData({ foldState: !that.data.foldState })
    console.log('unfold triggered')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受正确个数并计算正确率
  onLoad: function (options) {
    const that = this;
    that.data.exercises = JSON.parse(options.exercises);
    that.data.wrongExercise = JSON.parse(options.wrongExercise);
    that.data.section = options.section;
    that.data.correctNumber = that.data.exercises.length - that.data.wrongExercise.length;
    that.data.totalNumber = that.data.exercises.length;
    that.data.percentage = (parseInt(that.data.correctNumber * 10000 / that.data.totalNumber)) / 100;
    console.log('正确率为：', that.data.correctNumber, '/', that.data.totalNumber)
    console.log('百分化后为：', that.data.percentage, '%')
    that.setData({ 
      correctNumber: that.data.correctNumber,
      totalNumber: that.data.totalNumber, 
      percentage: that.data.percentage,
      exercises: that.data.exercises,
      wrongExercise: that.data.wrongExercise,
      section: that.data.section,
      })
    if (that.data.wrongExercise.length == 0) that.setData({ wrongFlag: false });
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