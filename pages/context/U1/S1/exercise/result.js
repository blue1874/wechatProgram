// pages/context/U1/S1/exercise/result.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongExerciseInOrder: [],
    wrongLength: 0,
    correctNumber: 0,
    totalNumber: 1,
    percentage: 0,
    wrongFlag: true,
    foldState: true,
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
    if (e.target.dataset.mode == 1) {
      if (app.globalData.wrongExercise.length == 0) {
        console.log("No wrong Exercise")   //判断是否错误个数为零
        return
      }
        app.globalData.chosenExercise = app.globalData.wrongExercise;
        // app.globalData.exerciseNumber = app.globalData.chosenExercise.length,
    }
    app.globalData.wrongExercise = [];
    wx.redirectTo({
      url: '../exercise/recog',
    })

  },
  //折叠显示
  unfold: function () {
    this.setData({ foldState: !this.data.foldState })
    console.log('unfold triggered')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受正确个数并计算正确率
  onLoad: function (options) {
    var changeOrder = app.globalData.wrongExercise;
    var wrongLength = app.globalData.wrongExercise.length;
    var correctNumber = options.cN;
    var totalNumber = app.globalData.chosenExercise.length;
    var percentage = (parseInt(correctNumber * 10000 / totalNumber)) / 100;
    console.log('正确率为：', correctNumber, '/', totalNumber)
    console.log('百分化后为：', percentage, '%')
    this.setData({ totalNumber: totalNumber, percentage: percentage, correctNumber: correctNumber })
    if (app.globalData.wrongExercise.length == 0) this.setData({ wrongFlag: false });
    var temp;
    for (let i = 0; i < changeOrder.length - 1; i++) {
      for (let j = 0; j < changeOrder.length - 1 - i; j++) {
        if (changeOrder[j] > changeOrder[j + 1]) {
          temp = changeOrder[j]
          changeOrder[j] = changeOrder[j + 1];
          changeOrder[j + 1] = temp
        }
      }
    };
    this.setData({ wrongExerciseInOrder: changeOrder })
    this.setData({ wrongLength: wrongLength })
    console.log("wrongExerciseInOrder=", this.data.wrongExerciseInOrder)

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