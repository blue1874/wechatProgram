// pages/context/U1/S1/word/recog.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isWrong: false,
    inputValue: '',
    currentNumber: 1,
    totalNumber: 0,
    section: '',
    words: [],
    wrongWord: [],
  },

  //my function
  //返回选择界面
  gotoSelect: function() {
    const that = this;
    wx.navigateTo({
      url: '../select/select?section=' + that.data.section,
    })
  },

  //记录输入的值
  getKana: function(e) {
    const that = this;
    that.setData({
      inputValue: e.detail.value
    })
  },
  //点击提交或小键盘的确定按钮事件
  formSubmit: function(e) {
    const that = this;
    console.log('输入的读音为：', that.data.inputValue)
    console.log('正确读音为：', that.data.words[that.data.currentNumber - 1].word)
    if (that.data.inputValue == '') {
      wx.showToast({
        title: '请输入读音！',
        icon: 'loading',
        duration: 1000
      })
    } else {
      if (that.data.inputValue == that.data.words[that.data.currentNumber - 1].word) {
        wx.showToast({
          title: '正确！',
          icon: 'success',
          duration: 1000
        })
        that.nextQuestion();
      } else {
        wx.showToast({
          title: '答案错误',
          icon: 'warn',
          duration: 1000
        })
        that.setData({
          isWrong: true,
          wrongWord: that.data.wrongWord.concat(that.data.words[that.data.currentNumber - 1]),
        })
        console.log("wrongWord has been changed to", that.data.wrongWord)
      }
    }
    return ''
  },
  nextQuestion: function() {
    const that = this;
    if (!that.data.isWrong) {
      that.setData({
        correctNumber: that.data.correctNumber + 1
      })
    }
    that.setData({
      currentNumber: (that.data.currentNumber + 1),
      isWrong: false,
      inputValue: '',
    })
    //console.log("currentNumber :", that.data.currentNumber, "totalNumber :", that.data.totalNumber);
    if (that.data.currentNumber > that.data.totalNumber) {
      wx.redirectTo({
        url: '../word/result?wrongWord=' + JSON.stringify(that.data.wrongWord) + '&chosenWord=' + JSON.stringify(that.data.words) + '&section=' + that.data.section,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受选择好的数组，并且洗牌
  onLoad: function(options) {
    //options应有参数 chosenWord 表示应在recog页面显示的所有单词
    const that = this;
    that.data.chosenWord = JSON.parse(options.chosenWord);
    that.data.section = options.section;
    console.log("section", options.section)
    console.log('洗牌前顺序：', that.data.chosenWord)
    that.data.wrongWord = [];
    var changeOrder = that.data.chosenWord;
    var n = that.data.chosenWord.length;
    var tmp, index, i;
    for (i = 0; i < n; i++) {
      index = Math.ceil(Math.random() * 200) % (n - i) + i;
      if (index != i) {
        tmp = changeOrder[i];
        changeOrder[i] = changeOrder[index];
        changeOrder[index] = tmp;
      }
    }
    that.setData({
      totalNumber: that.data.chosenWord.length
    })
    that.setData({
      words: changeOrder,
      section: that.data.section
    })

    console.log('洗牌后顺序：', that.data.words, '总数', that.data.totalNumber)
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