// pages/context/U1/S1/exercise/recog.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wrongFlag: false,
    clear: '',
    exercises: [
      { 
        question: "あんたわ今どこにいるの？", 
        options: [
          { op: "A", value: "中国", status: 0 }, 
          { op: "B", value: "日本", status: 0 }, 
          { op: "C", value: "アメリカ", status: 0 }, 
          { op: "D", value: "韓国", status: 0 },
          ], 
        correctAns: ["A",]
        },
      {
        question: "??",
        options: [
          { op: "A", value: "???", status: 0 },
          { op: "B", value: "???", status: 0 },
          { op: "C", value: "???", status: 0 },
          { op: "D", value: "???", status: 0 },
        ],
        correctAns: ["A",]
      },
    ],
    currentNumber: 1,
    totalNumber: 1,
    chosenOptions: [],
    correctNumber: 0,
  },

  //my function
  //返回选择界面
  gotoSelect: function () {
    wx.redirectTo({
      url: '../S1',
    })
  },

  chosen: function (e) {
    const that = this;
    var i1 = e.target.dataset.index;
    //console.log(i1);
    //console.log(that.data.currentNumber);
    //console.log(that.data.exercises[that.data.currentNumber - 1]);
    var i = that.data.exercises[that.data.currentNumber - 1].options[i1];
    i.status = i.status == 1 ? 0 : 1;
    that.setData({
      exercises: that.data.exercises,
    })
  },

  //点击提交或小键盘的确定按钮事件
  formSubmit: function (e) {
    const that = this;
    var i = that.data.exercises[that.data.currentNumber - 1].options;
    console.log("options:", i);
    for (var j = 0; j < i.length; j++)
    {
      if (i[j].status == 1) {
        that.data.chosenOptions.push(i[j].op);
        console.log("index:", i[j].op)
        console.log("chosenOptions ", that.data.chosenOptions)
      }
    }
    console.log('输入的选项为：', that.data.chosenOptions);
    console.log('正确选项为：', that.data.exercises[that.data.currentNumber - 1].correctAns);
    if ((that.data.chosenOptions.toString() == that.data.exercises[that.data.currentNumber - 1].correctAns.toString())) {
        wx.showToast({
          title: '正确！',
          icon: 'success',
          duration: 1000
        })
        that.setData({ correctNumber: (that.data.correctNumber + 1) })
        that.setData({ currentNumber: (that.data.currentNumber + 1) })
      }
      else {
        that.setData({ wrongFlag: true })
        app.globalData.wrongExercise.push(that.data.currentNumber)
        console.log("wrongExercises has been changed to", app.globalData.wrongExercise)
      }
      that.setData({ clear: '' })
      if (that.data.currentNumber > that.data.totalNumber) {
        wx.redirectTo({
          url: '../exercise/result?cN=' + that.data.correctNumber,
        })
      }
    that.setData({ chosenOptions: [] })
    return ''
  },
  wrongComfirm: function () {
    const that = this;
    that.setData({ wrongFlag: false })
    that.setData({ currentNumber: (that.data.currentNumber + 1)})
    if (that.data.currentNumber > that.data.totalNumber) {
      wx.redirectTo({
        url: '../exercise/result?cN=' + that.data.correctNumber,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受选择好的数组，并且洗牌
  onLoad: function () {
    app.globalData.chosenExercise = this.data.exercises;
    this.setData({totalNumber: this.data.exercises.length});
    // console.log('洗牌前顺序：', app.globalData.chosenExercise)
    // var changeOrder = app.globalData.chosenExercise;
    // var n = app.globalData.chosenExercise.length;
    // var tmp, index, i;
    // for (i = 0; i < n; i++) {
    //   index = Math.ceil(Math.random() * 200) % (n - i) + i;
    //   if (index != i) {
    //     tmp = changeOrder[i];
    //     changeOrder[i] = changeOrder[index];
    //     changeOrder[index] = tmp;
    //   }
    // }
    // this.setData({ totalNumber: app.globalData.chosenExercise.length })
    // this.setData({ Exercise: changeOrder })

    // console.log('洗牌后顺序：', this.data.Exercises, '总数', this.data.totalNumber)
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