// pages/context/U1/S3/exercise/recog.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wrongFlag: false,
    clear: '',
    exercises: [
      { question: 'ーすみません、（ほんや）は　どこですか。', options: [{ op: 'A', value: '八百屋', status: 0 }, { op: 'B', value: '本屋', status: 0 }, { op: 'C', value: '翻訳', status: 0 }, { op: 'D', value: '銀行', status: 0 }], correctAns: ['B'] },
      { question: 'ここは　（きっさてん）です。', options: [{ op: 'A', value: '図書館', status: 0 }, { op: 'B', value: '食堂', status: 0 }, { op: 'C', value: '傘店', status: 0 }, { op: 'D', value: '喫茶店', status: 0 }], correctAns: ['D'] },
      { question: '銀行の　（となり）は　図書館です。', options: [{ op: 'A', value: '隣', status: 0 }, { op: 'B', value: '辺', status: 0 }, { op: 'C', value: '右', status: 0 }, { op: 'D', value: '左', status: 0 }], correctAns: ['A'] },
      { question: '今日は　（すいようび）ですか。', options: [{ op: 'A', value: '金曜日', status: 0 }, { op: 'B', value: '木曜日', status: 0 }, { op: 'C', value: '日曜日', status: 0 }, { op: 'D', value: '水曜日', status: 0 }], correctAns: ['D'] },
      { question: 'ーあのう、（売り場）は　どこですか。', options: [{ op: 'A', value: 'いりくち', status: 0 }, { op: 'B', value: 'はいりくち', status: 0 }, { op: 'C', value: 'うりば', status: 0 }, { op: 'D', value: 'うりは', status: 0 }], correctAns: ['C'] },
      { question: 'ー東京の　（地図）は　どこですか。', options: [{ op: 'A', value: 'ちす', status: 0 }, { op: 'B', value: 'ぢす', status: 0 }, { op: 'C', value: 'ちず', status: 0 }, { op: 'D', value: 'ぢず', status: 0 }], correctAns: ['C'] },
      { question: '昨日は　（木曜日）です。', options: [{ op: 'A', value: 'もうようび', status: 0 }, { op: 'B', value: 'もくようび', status: 0 }, { op: 'C', value: 'もうようひ', status: 0 }, { op: 'D', value: 'もくゆうひ', status: 0 }], correctAns: ['B'] },
      { question: '（食堂）は　このビルの　3階です。', options: [{ op: 'A', value: 'しょくどう', status: 0 }, { op: 'B', value: 'しょうどう', status: 0 }, { op: 'C', value: 'しょくとう', status: 0 }, { op: 'D', value: 'しょうとう', status: 0 }], correctAns: ['A'] },
      { question: 'ーホテルは　（　）ですか。\n－そこです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'どれ', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どこ', status: 0 }], correctAns: ['D'] },
      { question: 'ーあのひとは　（　）ですか。\nー小野さんです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'どれ', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どこ', status: 0 }], correctAns: ['C'] },
      { question: 'ーあなたの　傘は　（　）ですか。\n－これです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'どれ', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どこ', status: 0 }], correctAns: ['B'] },
      { question: 'ーあれは　（　）ですか。\nーあれは　病院です。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'どれ', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どこ', status: 0 }], correctAns: ['A'] },
      { question: 'ー病院は　どちらですか。\n－（　）。', options: [{ op: 'A', value: 'あらちです。', status: 0 }, { op: 'B', value: 'あちらです。', status: 0 }, { op: 'C', value: 'あのうです', status: 0 }, { op: 'D', value: 'どちらです。', status: 0 }], correctAns: ['B'] },
      { question: 'ーここは　病院です（　）、銀行ですか。', options: [{ op: 'A', value: 'か', status: 0 }, { op: 'B', value: 'が', status: 0 }, { op: 'C', value: 'は', status: 0 }, { op: 'D', value: 'の', status: 0 }], correctAns: ['A'] },
      { question: 'ー（　）、すみません。\n－何ですか。', options: [{ op: 'A', value: 'あの', status: 0 }, { op: 'B', value: 'その', status: 0 }, { op: 'C', value: 'あのう', status: 0 }, { op: 'D', value: 'そのう', status: 0 }], correctAns: ['C'] },
      { question: 'ーこの雑誌（　）　いくらですか。', options: [{ op: 'A', value: 'か', status: 0 }, { op: 'B', value: 'も', status: 0 }, { op: 'C', value: 'は', status: 0 }, { op: 'D', value: 'の', status: 0 }], correctAns: ['C'] },
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
      url: '../S3',
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