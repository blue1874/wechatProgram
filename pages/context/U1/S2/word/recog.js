// pages/context/U1/S2/word/recog.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wrongFlag: false,
    inputValue: '',
    clear: '',
    currentNumber: 1,
    totalNumber: 1,
    words: [],
    correctNumber: 0,
  },

  //my function
  //返回选择界面
  gotoSelect: function () {
    wx.navigateTo({
      url: '../S2',
    })
  },

  //记录输入的值
  getKana: function (e) {
    this.setData({ inputValue: e.detail.value })
  },

  //点击提交或小键盘的确定按钮事件
  formSubmit: function (e) {
    console.log('输入的假名为：', this.data.inputValue)
    console.log('正确假名为：', this.data.words[this.data.currentNumber - 1].word)
    if (this.data.inputValue == '') {
      wx.showToast({
        title: '请输入假名！',
        icon: 'loading',
        duration: 1000
      })
    }
    else {
      if ((this.data.inputValue == this.data.words[this.data.currentNumber - 1].word)) {
        wx.showToast({
          title: '正确！',
          icon: 'success',
          duration: 1000
        })
        this.setData({ correctNumber: (this.data.correctNumber + 1) })
        this.setData({ currentNumber: (this.data.currentNumber + 1) })
      }
      else {
        this.setData({ wrongFlag: true })
        app.globalData.wrongWord = app.globalData.wrongWord.concat(this.data.words[this.data.currentNumber - 1])
        console.log("wrongWord has been changed to", app.globalData.wrongWord)
      }
      this.setData({ clear: '' })
      if (this.data.currentNumber > this.data.totalNumber) {
        wx.redirectTo({
          url: '../word/result?cN=' + this.data.correctNumber,
        })
      }
    }
    this.setData({ inputValue: '' })
    return ''
  },
  wrongComfirm: function () {
    this.setData({ wrongFlag: false })
    this.setData({ currentNumber: (this.data.currentNumber + 1) })
    if (this.data.currentNumber > this.data.totalNumber) {
      wx.redirectTo({
        url: '../word/result?cN=' + this.data.correctNumber,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受选择好的数组，并且洗牌
  onLoad: function (options) {
    console.log('洗牌前顺序：', app.globalData.chosenWord)
    app.globalData.wrongWord = [];
    
    var changeOrder = app.globalData.chosenWord;
    var n = app.globalData.chosenWord.length;
    var tmp, index, i;
    for (i = 0; i < n; i++) {
      index = Math.ceil(Math.random() * 200) % (n - i) + i;
      if (index != i) {
        tmp = changeOrder[i];
        changeOrder[i] = changeOrder[index];
        changeOrder[index] = tmp;
      }
    }
    this.setData({ totalNumber: app.globalData.chosenWord.length})
    this.setData({ words: changeOrder })

    console.log('洗牌后顺序：', this.data.words, '总数', this.data.totalNumber)
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