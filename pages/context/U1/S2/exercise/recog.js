// pages/context/U1/S2/exercise/recog.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wrongFlag: false,
    clear: '',
    exercises: [
      { question: 'これは　（かさ）です。', options: [{ op: 'A', value: '靴', status: 0 }, { op: 'B', value: '本', status: 0 }, { op: 'C', value: '傘', status: 0 }, { op: 'D', value: '机', status: 0 }], correctAns: ['C'] },
{ question: 'それは　（じしょ）です。', options: [{ op: 'A', value: '新聞', status: 0 }, { op: 'B', value: '辞書', status: 0 }, { op: 'C', value: '雑誌', status: 0 }, { op: 'D', value: '時計', status: 0 }], correctAns: ['B'] },
{ question: 'あれは　だれの（しゃしん）ですか。', options: [{ op: 'A', value: '写真', status: 0 }, { op: 'B', value: '時計', status: 0 }, { op: 'C', value: '車', status: 0 }, { op: 'D', value: '照片', status: 0 }], correctAns: ['A'] },
{ question: 'これは　（なん）ですか。', options: [{ op: 'A', value: '母', status: 0 }, { op: 'B', value: '誰', status: 0 }, { op: 'C', value: '人', status: 0 }, { op: 'D', value: '何', status: 0 }], correctAns: ['D'] },
{ question: 'これは　わたしの　（自転車）です。', options: [{ op: 'A', value: 'してんしゃ', status: 0 }, { op: 'B', value: 'じてんしゃ', status: 0 }, { op: 'C', value: 'しでんしゃ', status: 0 }, { op: 'D', value: 'じでんしゃ', status: 0 }], correctAns: ['B'] },
{ question: 'これは　（お土産）です、どうぞ。', options: [{ op: 'A', value: 'おみやげ', status: 0 }, { op: 'B', value: 'おみやけ', status: 0 }, { op: 'C', value: 'おとさん', status: 0 }, { op: 'D', value: 'おどさん', status: 0 }], correctAns: ['A'] },
{ question: 'あれは　李さんの　（鉛筆）です。', options: [{ op: 'A', value: 'えんひつ', status: 0 }, { op: 'B', value: 'せんひつ', status: 0 }, { op: 'C', value: 'えんぴつ', status: 0 }, { op: 'D', value: 'せんぴつ', status: 0 }], correctAns: ['C'] },
{ question: 'わたしの　（母）は　40歳です。', options: [{ op: 'A', value: 'ちち', status: 0 }, { op: 'B', value: 'はは', status: 0 }, { op: 'C', value: 'かあ', status: 0 }, { op: 'D', value: 'とう', status: 0 }], correctAns: ['B'] },
{ question: 'ー小野さんの　本は　（　）ですか。\nーこれです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'なに', status: 0 }, { op: 'C', value: 'どれ', status: 0 }, { op: 'D', value: 'だれ', status: 0 }], correctAns: ['C'] },
{ question: 'ーこれは　お土産です、どうぞ。\n－（　）', options: [{ op: 'A', value: 'どうも　すみません', status: 0 }, { op: 'B', value: 'はい、どうぞ', status: 0 }, { op: 'C', value: 'はい、そうです', status: 0 }, { op: 'D', value: 'ありがとうございます', status: 0 }], correctAns: ['D'] },
{ question: 'ーこれは中国の名産品です、（　）。', options: [{ op: 'A', value: 'どうぞ', status: 0 }, { op: 'B', value: 'どうも', status: 0 }, { op: 'C', value: 'どう', status: 0 }, { op: 'D', value: 'こちらこそ', status: 0 }], correctAns: ['A'] },
{ question: 'ーこれは　だれのパソコンですか。\n－（　）は　李さんのです。', options: [{ op: 'A', value: 'これ', status: 0 }, { op: 'B', value: 'それ', status: 0 }, { op: 'C', value: 'あれ', status: 0 }, { op: 'D', value: 'どれ', status: 0 }], correctAns: ['B'] },
{ question: 'ーあなたは（　）ですか。\nー26歳です。', options: [{ op: 'A', value: 'おいくつ', status: 0 }, { op: 'B', value: 'なん', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どの', status: 0 }], correctAns: ['A'] },
{ question: 'ーこれは　（　）の　カメラですか。\nーわたしのです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'なに', status: 0 }, { op: 'C', value: 'どれ', status: 0 }, { op: 'D', value: 'だれ', status: 0 }], correctAns: ['D'] },
{ question: 'ーあれは　雑誌ですか。\nーいいえ、（　）は　辞書です。', options: [{ op: 'A', value: 'これ', status: 0 }, { op: 'B', value: 'それ', status: 0 }, { op: 'C', value: 'あれ', status: 0 }, { op: 'D', value: 'どれ', status: 0 }], correctAns: ['C'] },
{ question: 'ーわたしは学生です。\nー（　）。ー学生です。　', options: [{ op: 'A', value: 'はっ', status: 0 }, { op: 'B', value: 'えっ', status: 0 }, { op: 'C', value: 'あっ', status: 0 }, { op: 'D', value: 'ええ', status: 0 }], correctAns: ['B'] },
{ question: 'ーこれは　（　）ですか。\nーそれは　かばんです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'なに', status: 0 }, { op: 'C', value: 'どれ', status: 0 }, { op: 'D', value: 'だれ', status: 0 }], correctAns: ['A'],},
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
      url: '../S2',
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