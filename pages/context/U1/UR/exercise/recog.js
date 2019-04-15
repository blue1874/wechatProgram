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
      { question: '1.（看汉字选假名）李さんは　東京（大学）の　学生です。', options: [{ op: 'A', value: 'たいかく', status: 0 }, { op: 'B', value: 'だいかく', status: 0 }, { op: 'C', value: 'たいがく', status: 0 }, { op: 'D', value: 'だいがく', status: 0 }], correctAns: ['D'] },
      { question: '2.これは　（3000）円です。　', options: [{ op: 'A', value: 'さんせん', status: 0 }, { op: 'B', value: 'さんぜん', status: 0 }, { op: 'C', value: 'よんせん', status: 0 }, { op: 'D', value: 'よんぜん', status: 0 }], correctAns: ['B'] },
      { question: '3.（机）の上に　地図が　あります。', options: [{ op: 'A', value: 'つくえ', status: 0 }, { op: 'B', value: 'いす', status: 0 }, { op: 'C', value: 'き', status: 0 }, { op: 'D', value: 'いき', status: 0 }], correctAns: ['A'] },
      { question: '4.あれは　（家族）の　写真です。', options: [{ op: 'A', value: 'じゃそく', status: 0 }, { op: 'B', value: 'じゃぞく', status: 0 }, { op: 'C', value: 'かそく', status: 0 }, { op: 'D', value: 'かぞく', status: 0 }], correctAns: ['D'] },
      { question: '5.これは　だれの　（辞書）ですか。', options: [{ op: 'A', value: 'ししょ', status: 0 }, { op: 'B', value: 'じしょ', status: 0 }, { op: 'C', value: 'ししょう', status: 0 }, { op: 'D', value: 'じしょう', status: 0 }], correctAns: ['B'] },
      { question: '6.（受付）は　このビルの　3階に　あります。', options: [{ op: 'A', value: 'うっつけ', status: 0 }, { op: 'B', value: 'うっけ', status: 0 }, { op: 'C', value: 'うけつけ', status: 0 }, { op: 'D', value: 'うけっつ', status: 0 }], correctAns: ['C'] },
      { question: '7.（食堂）は　だれも　いません。', options: [{ op: 'A', value: 'しょくとう', status: 0 }, { op: 'B', value: 'しょとう', status: 0 }, { op: 'C', value: 'しょくどう', status: 0 }, { op: 'D', value: 'しょどう', status: 0 }], correctAns: ['C'] },
      { question: '8.よろしくお（願い）します。', options: [{ op: 'A', value: 'ねがい', status: 0 }, { op: 'B', value: 'ねかい', status: 0 }, { op: 'C', value: 'ちかい', status: 0 }, { op: 'D', value: 'ちがい', status: 0 }], correctAns: ['A'] },
      { question: '9.これは　（雑誌）です。', options: [{ op: 'A', value: 'ざし', status: 0 }, { op: 'B', value: 'ざっし', status: 0 }, { op: 'C', value: 'さし', status: 0 }, { op: 'D', value: 'さっし', status: 0 }], correctAns: ['B'] },
      { question: '10.これは　わたしの　（息子）です。', options: [{ op: 'A', value: 'むすめ', status: 0 }, { op: 'B', value: 'おとめ', status: 0 }, { op: 'C', value: 'むすこ', status: 0 }, { op: 'D', value: 'おとな', status: 0 }], correctAns: ['C'] },
      { question: '11.いすの　（下）に　猫が　います。', options: [{ op: 'A', value: 'うえ', status: 0 }, { op: 'B', value: 'した', status: 0 }, { op: 'C', value: 'なか', status: 0 }, { op: 'D', value: 'そと', status: 0 }], correctAns: ['B'] },
      { question: '12.私は　（一人）暮らしです。', options: [{ op: 'A', value: 'ひとり', status: 0 }, { op: 'B', value: 'ふたり', status: 0 }, { op: 'C', value: 'いちじん', status: 0 }, { op: 'D', value: 'いちにん', status: 0 }], correctAns: ['A'] },
      { question: '13.（看假名选汉字）あなたの　（じてんしゃ）は　どちらですか。', options: [{ op: 'A', value: '自動車', status: 0 }, { op: 'B', value: '車', status: 0 }, { op: 'C', value: '自転車', status: 0 }, { op: 'D', value: '電話', status: 0 }], correctAns: ['C'] },
      { question: '14.これは　名古屋の　お（みやげ）です、どうぞ。', options: [{ op: 'A', value: '名産', status: 0 }, { op: 'B', value: '名産品', status: 0 }, { op: 'C', value: '都産', status: 0 }, { op: 'D', value: '土産', status: 0 }], correctAns: ['D'] },
      { question: '15.会議室の　となりは　（としょしつ）です。', options: [{ op: 'A', value: '図書室', status: 0 }, { op: 'B', value: '読書室', status: 0 }, { op: 'C', value: '図書館', status: 0 }, { op: 'D', value: '読書館', status: 0 }], correctAns: ['A'] },
      { question: '16.あなたの　（そふ）は　おいくつですか。', options: [{ op: 'A', value: '祖父', status: 0 }, { op: 'B', value: '祖母', status: 0 }, { op: 'C', value: '母', status: 0 }, { op: 'D', value: '父', status: 0 }], correctAns: ['A'] },
      { question: '17.これは　（くるま）の　かぎです。', options: [{ op: 'A', value: '傘', status: 0 }, { op: 'B', value: '本', status: 0 }, { op: 'C', value: '家', status: 0 }, { op: 'D', value: '車', status: 0 }], correctAns: ['D'] },
      { question: '18.男の　人は　車の　（うしろ）に　います。', options: [{ op: 'A', value: '裏', status: 0 }, { op: 'B', value: '後ろ', status: 0 }, { op: 'C', value: '表', status: 0 }, { op: 'D', value: '外', status: 0 }], correctAns: ['B'] },
      { question: '19.これは　JC企画の（しゃちょう）です。', options: [{ op: 'A', value: '社員', status: 0 }, { op: 'B', value: '社長', status: 0 }, { op: 'C', value: '店員', status: 0 }, { op: 'D', value: '店長', status: 0 }], correctAns: ['B'] },
      { question: '20.（きょう）は　木曜日です。', options: [{ op: 'A', value: '今', status: 0 }, { op: 'B', value: '今度', status: 0 }, { op: 'C', value: '明日', status: 0 }, { op: 'D', value: '今日', status: 0 }], correctAns: ['D'] },
      { question: '21.（选词填空）わたしの　部屋は　8（　）に　あります。', options: [{ op: 'A', value: '階', status: 0 }, { op: 'B', value: '本', status: 0 }, { op: 'C', value: '阶', status: 0 }, { op: 'D', value: '层', status: 0 }], correctAns: ['A'] },
      { question: '22.林さんは　中国人ですか　（　）ですか。', options: [{ op: 'A', value: '中国', status: 0 }, { op: 'B', value: '社員', status: 0 }, { op: 'C', value: '日本人', status: 0 }, { op: 'D', value: '学生', status: 0 }], correctAns: ['C'] },
      { question: '23.はじめまして、私は　李です、（　）。', options: [{ op: 'A', value: 'すみません', status: 0 }, { op: 'B', value: 'どうぞよろしく', status: 0 }, { op: 'C', value: 'ありがとう', status: 0 }, { op: 'D', value: 'こちらこそ', status: 0 }], correctAns: ['B'] },
      { question: '24.父の　父は　（　）です。', options: [{ op: 'A', value: 'おとうさん', status: 0 }, { op: 'B', value: 'おかあさん', status: 0 }, { op: 'C', value: 'おじいさん', status: 0 }, { op: 'D', value: 'おばあさん', status: 0 }], correctAns: ['C'] },
      { question: '25.北京旅行社は　中国の（　）です。', options: [{ op: 'A', value: '学生', status: 0 }, { op: 'B', value: '先生', status: 0 }, { op: 'C', value: '社員', status: 0 }, { op: 'D', value: '企業', status: 0 }], correctAns: ['D'] },
      { question: '26.（　）は　日本の町です。', options: [{ op: 'A', value: '北京', status: 0 }, { op: 'B', value: '横浜', status: 0 }, { op: 'C', value: '犬', status: 0 }, { op: 'D', value: '机', status: 0 }], correctAns: ['B'] },
      { question: '27.マンションの　隣は　（　）です。', options: [{ op: 'A', value: 'ホテル', status: 0 }, { op: 'B', value: 'カメラ', status: 0 }, { op: 'C', value: 'フランス', status: 0 }, { op: 'D', value: 'パソコン', status: 0 }], correctAns: ['A'] },
      { question: '28.（同义句转换）あなたは　（何歳ですか）。', options: [{ op: 'A', value: 'いくらですか', status: 0 }, { op: 'B', value: 'いつですか', status: 0 }, { op: 'C', value: 'なんじですか', status: 0 }, { op: 'D', value: 'おいくつですか', status: 0 }], correctAns: ['D'] },
      { question: '29.李さんの　部屋は　（どこですか）。', options: [{ op: 'A', value: 'いくらですか', status: 0 }, { op: 'B', value: 'どこにですか', status: 0 }, { op: 'C', value: 'いくらに　ありますか', status: 0 }, { op: 'D', value: 'どこに　ありますか', status: 0 }], correctAns: ['D'] },
      { question: '30.受付は　（どこですか）。', options: [{ op: 'A', value: 'どちらですか。', status: 0 }, { op: 'B', value: 'どらちですか', status: 0 }, { op: 'C', value: 'どちらにですか', status: 0 }, { op: 'D', value: 'どらちにですか', status: 0 }], correctAns: ['A'] },
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