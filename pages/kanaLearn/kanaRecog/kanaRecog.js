// pages/kanaLearn/kanaRecog.js
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
    selectedKana: [],
    wrongKana: [],
  },

  //my function

  //记录输入的值
  getKana: function(e) {
    this.setData({
      inputValue: e.detail.value
    })

  },
  //点击提交或小键盘的确定按钮事件
  formSubmit: function(e) {
    console.log('输入的读音为：', this.data.inputValue)
    console.log('正确读音为：', this.data.selectedKana[this.data.currentNumber - 1].roma, )
    if (this.data.inputValue == '') {
      wx.showToast({
        title: '请输入读音！',
        icon: 'loading',
        duration: 1000
      })
    } else {
      if (this.data.inputValue == this.data.selectedKana[this.data.currentNumber - 1].roma) {
        wx.showToast({
          title: '正确！',
          icon: 'success',
          duration: 1000
        })
        this.nextQuestion();
      } else {
        wx.showToast({
          title: '答案错误',
          icon: 'cancel',
          duration: 1000
        })
        this.setData({
          isWrong: true,
          wrongKana: this.data.wrongKana.concat(this.data.selectedKana[this.data.currentNumber - 1]),
        })
        console.log("wrongKana has been changed to", this.data.wrongKana)
      }
    }
    return ''
  },
  nextQuestion: function() {
    if (!this.data.isWrong) {
      this.setData({
        correctNumber: this.data.correctNumber + 1
      })
    }
    this.setData({
      currentNumber: (this.data.currentNumber + 1),
      isWrong: false,
      inputValue: '',
    })
    if (this.data.currentNumber > this.data.totalNumber) {
      wx.redirectTo({
        url: '../result/result?wrongKana=' + JSON.stringify(this.data.wrongKana) + '&selectedKana=' + JSON.stringify(this.data.selectedKana),
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受选择好的数组，并且洗牌
  onLoad: function(options) {
    //console.log('洗牌前顺序：', this.data.Kana)

    // var changeOrder = this.data.Kana;
    // var n = this.data.Kana.length;
    // var tmp, index, i;
    // for (i = 0; i < n; i++) {
    //   index = Math.ceil(Math.random() * 200) % (n - i) + i;
    //   if (index != i) {
    //     tmp = changeOrder[i];
    //     changeOrder[i] = changeOrder[index];
    //     changeOrder[index] = tmp;
    //   }
    // }

    var selectedKana = JSON.parse(options.selectedKana);
    console.log("selected Kana:", selectedKana);
    console.log('测试假名数量', selectedKana.length);
    this.setData({
      totalNumber: selectedKana.length,
      selectedKana: selectedKana,
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