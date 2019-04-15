// pages/context/U1/UR/exercise/recog.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wrongFlag: false,
    clear: '',
    exercises: [
      { question: '（にわ）に　本が　あります。', options: [{ op: 'A', value: '家', status: 0 }, { op: 'B', value: '居間', status: 0 }, { op: 'C', value: '部屋', status: 0 }, { op: 'D', value: '庭', status: 0 }], correctAns: ['D'] },
      { question: '本棚の　上に　（はこ）が　あります。', options: [{ op: 'A', value: '箱', status: 0 }, { op: 'B', value: '犬', status: 0 }, { op: 'C', value: '猫', status: 0 }, { op: 'D', value: '眼鏡', status: 0 }], correctAns: ['A'] },
      { question: '食堂の　隣に　（としょしつ）が　あります。', options: [{ op: 'A', value: '図書館', status: 0 }, { op: 'B', value: '図書室', status: 0 }, { op: 'C', value: '公園', status: 0 }, { op: 'D', value: '場所', status: 0 }], correctAns: ['B'] },
      { question: 'ベッドの　上に　（こども）　が　います。', options: [{ op: 'A', value: '妹', status: 0 }, { op: 'B', value: '弟', status: 0 }, { op: 'C', value: '子供', status: 0 }, { op: 'D', value: '息子', status: 0 }], correctAns: ['C'] },
      { question: 'ーご（兄弟）が　いますか。\nーはい、妹が　います。', options: [{ op: 'A', value: 'きゅうたい', status: 0 }, { op: 'B', value: 'きょうたい', status: 0 }, { op: 'C', value: 'きゅうだい', status: 0 }, { op: 'D', value: 'きょうだい', status: 0 }], correctAns: ['D'] },
      { question: '近くに　（地下鉄）が　あります。', options: [{ op: 'A', value: 'ちかてつ', status: 0 }, { op: 'B', value: 'ちがてつ', status: 0 }, { op: 'C', value: 'ちかでつ', status: 0 }, { op: 'D', value: 'ちがでつ', status: 0 }], correctAns: ['A'] },
      { question: 'わたしの　（両親）は　東京に　います。', options: [{ op: 'A', value: 'きょうたい', status: 0 }, { op: 'B', value: 'きょうだい', status: 0 }, { op: 'C', value: 'りょうしん', status: 0 }, { op: 'D', value: 'りょしん', status: 0 }], correctAns: ['C'] },
      { question: 'あの　（男）の子は　生徒です。', options: [{ op: 'A', value: 'おんな', status: 0 }, { op: 'B', value: 'おとこ', status: 0 }, { op: 'C', value: 'おとめ', status: 0 }, { op: 'D', value: 'おとな', status: 0 }], correctAns: ['B'] },
      { question: '部屋に　ねこ（　）。', options: [{ op: 'A', value: 'が　あります', status: 0 }, { op: 'B', value: 'が　います', status: 0 }, { op: 'C', value: 'に　あります', status: 0 }, { op: 'D', value: 'に　います', status: 0 }], correctAns: ['B'] },
      { question: '図書館は　どこ（　）か。', options: [{ op: 'A', value: 'が　あります', status: 0 }, { op: 'B', value: 'が　います', status: 0 }, { op: 'C', value: 'に　あります', status: 0 }, { op: 'D', value: 'に　います', status: 0 }], correctAns: ['C'] },
      { question: 'にわに　犬（　）　猫が　います。', options: [{ op: 'A', value: 'の', status: 0 }, { op: 'B', value: 'と', status: 0 }, { op: 'C', value: 'は', status: 0 }, { op: 'D', value: 'が', status: 0 }], correctAns: ['B'] },
      { question: '壁（　）　スイッチが　あります。', options: [{ op: 'A', value: 'の', status: 0 }, { op: 'B', value: 'の　うえに', status: 0 }, { op: 'C', value: 'の　そとに', status: 0 }, { op: 'D', value: 'に', status: 0 }], correctAns: ['D'] },
      { question: '李さんの　傘は　どこ（　）。', options: [{ op: 'A', value: 'に　ありますか', status: 0 }, { op: 'B', value: 'が　ありますか', status: 0 }, { op: 'C', value: 'にですか', status: 0 }, { op: 'D', value: 'がですか', status: 0 }], correctAns: ['A'] },
      { question: 'ー美術館は　どこに　ありますか。\n－（　）、あそこです。', options: [{ op: 'A', value: 'あのう', status: 0 }, { op: 'B', value: 'ええと', status: 0 }, { op: 'C', value: 'あっ', status: 0 }, { op: 'D', value: 'えっ', status: 0 }], correctAns: ['B'] },
      { question: '（　）は　体育館に　います。', options: [{ op: 'A', value: '本', status: 0 }, { op: 'B', value: 'サッカーボール', status: 0 }, { op: 'C', value: '李さん', status: 0 }, { op: 'D', value: '李さんの　ボール', status: 0 }], correctAns: ['C'] },
      { question: '居間に　だれ（　）　いません。', options: [{ op: 'A', value: 'か', status: 0 }, { op: 'B', value: 'が', status: 0 }, { op: 'C', value: 'は', status: 0 }, { op: 'D', value: 'も', status: 0 }], correctAns: ['D'] },
    ],
    currentNumber: 1,
    totalNumber: 1,
    chosenOptions: [],
    correctNumber: 0,
  },

  //my function
  //返回选择界面
  gotoSelect: function () {
    wx.navigateTo({
      url: '../UR',
    })
  },

  chosen: function (e) {
    const that = this;
    var i1 = e.target.dataset.index;
    var ex = that.data.exercises[that.data.currentNumber - 1];
    //console.log(i1);
    //console.log(that.data.currentNumber);
    //console.log(that.data.exercises[that.data.currentNumber - 1]);
    //var i = ex.options[i1];
    console.log("正确答案数量", ex.correctAns.length);
    if (ex.correctAns.length == 1) //单选题
    {
      for (var j = 0; j < ex.options.length; j++)
      {
          ex.options[j].status = j == i1 ? 1 : 0;
      }
    }
    else //多选题
    {
      ex.options[i1].status = i.status == 1 ? 0 : 1;
    }
    that.setData({
      exercises: that.data.exercises,
    })
  },

  //点击提交或小键盘的确定按钮事件
  input: function (e) {
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
    app.globalData.wrongExercise = [];
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