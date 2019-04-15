// pages/context/theFirstUnit/theFirstUnit.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // height: 0,
    currentData: 0,
    chosenWord: [],
    state: 0,
    words: [{ word: "ちゅうごくじん", property: "名", meaning: "中国人", status: 0 },
    { word: "にほんじん", property: "名", meaning: "日本人", status: 0 },
    { word: "かんこくじん", property: "名", meaning: "韩国人", status: 0 },
    { word: "アメリカじん", property: "名", meaning: "美国人", status: 0 },
    { word: "フランスじん", property: "名", meaning: "法国人", status: 0 },
    { word: "がくせい", property: "名", meaning: "（大）学生", status: 0 },
    { word: "せんせい", property: "名", meaning: "老师", status: 0 },
    { word: "りゅうがくせい", property: "名", meaning: "留学生", status: 0 },
    { word: "きょうじゅ", property: "名", meaning: "教授", status: 0 },
    { word: "しゃいん", property: "名", meaning: "职员", status: 0 },
    { word: "かいしゃいん", property: "名", meaning: "公司职员", status: 0 },
    { word: "てんいん", property: "名", meaning: "店员", status: 0 },
    { word: "けんしゅうせい", property: "名", meaning: "进修生", status: 0 },
    { word: "きぎょう", property: "名", meaning: "企业", status: 0 },
    { word: "だいがく", property: "名", meaning: "大学", status: 0 },
    { word: "ちち", property: "名", meaning: "（我）父亲", status: 0 },
    { word: "かちょう", property: "名", meaning: "科长", status: 0 },
    { word: "しゃちょう", property: "名", meaning: "总经理，社长", status: 0 },
    { word: "でむかえ", property: "名", meaning: "迎接", status: 0 },
    { word: "あのひと", property: "名", meaning: "那个人", status: 0 },
    { word: "わたし", property: "代", meaning: "我", status: 0 },
    { word: "あなた", property: "代", meaning: "你", status: 0 },
    { word: "どうも", property: "副", meaning: "非常，很", status: 0 },
    { word: "はい", property: "叹", meaning: "哎，是的", status: 0 },
    { word: "いいえ", property: "叹", meaning: "不，不是", status: 0 },
    { word: "あっ", property: "叹", meaning: "哎，哎呀", status: 0 },
    { word: "り", property: "专", meaning: "李", status: 0 },
    { word: "おう", property: "专", meaning: "王", status: 0 },
    { word: "ちょう", property: "专", meaning: "张", status: 0 },
    { word: "もり", property: "专", meaning: "森", status: 0 },
    { word: "はやし", property: "专", meaning: "林", status: 0 },
    { word: "おの", property: "专", meaning: "小野", status: 0 },
    { word: "よしだ", property: "专", meaning: "吉田", status: 0 },
    { word: "たなか", property: "专", meaning: "田中", status: 0 },
    { word: "なかむら", property: "专", meaning: "中村", status: 0 },
    { word: "たろう", property: "专", meaning: "太郎", status: 0 },
    { word: "キム", property: "专", meaning: "金", status: 0 },
    { word: "デュポン", property: "专", meaning: "迪蓬", status: 0 },
    { word: "スミス", property: "专", meaning: "史密斯", status: 0 },
    { word: "ジョンソン", property: "专", meaning: "约翰逊", status: 0 },
    { word: "ちゅうごく", property: "专", meaning: "中国", status: 0 },
    { word: "こんにちは", property: "短语", meaning: "你好", status: 0 },
    { word: "すみません", property: "短语", meaning: "对不起，请问", status: 0 },
    { word: "どうぞ", property: "短语", meaning: "请", status: 0 },
    { word: "よろしくおねがいします", property: "短语", meaning: "请多关照", status: 0 },
    { word: "はじめまして", property: "短语", meaning: "初次见面", status: 0 },
    { word: "こちらこそ", property: "短语", meaning: "我才要，请您", status: 0 },
    { word: "そうです", property: "短语", meaning: "是这样", status: 0 },
    { word: "ちがいます", property: "短语", meaning: "不是", status: 0 },
    { word: "わかりません", property: "短语", meaning: "不知道", status: 0 },
    { word: "どうもすみません", property: "短语", meaning: "实在对不起", status: 0 }]
,
    exercises: [
      {
        question: "ー李さんは（　）ですか。\nーはい、学生です。",
        options: [
          { op: "A", value: "中国人", status: 0 },
          { op: "B", value: "日本人", status: 0 },
          { op: "C", value: "学生", status: 0 },
          { op: "D", value: "先生", status: 0 },
        ],
        correctAns: ["C",]
      },
      {
        question: "ーあなたは  李さんですか。\n－（　）。",
        options: [
          { op: "A", value: "はい、李さんです", status: 0 },
          { op: "B", value: "いいえ、そうです", status: 0 },
          { op: "C", value: "はい、李です", status: 0 },
          { op: "D", value: "いいえ、李です", status: 0 },
        ],
        correctAns: ["C",]
      },
      {
        question: "ーあなたは  小野さんですか。－（　）。",
        options: [
          { op: "A", value: "はい、李です", status: 0 },
          { op: "B", value: "いいえ、小野じゃありません", status: 0 },
          { op: "C", value: "はい、小野じゃです。", status: 0 },
          { op: "D", value: "いいえ、そうです", status: 0 },
        ],
        correctAns: ["B",]
      },
      {
        question: "ーあなたは  大学（　）先生ですか。\n－はい、そうです。",
        options: [
          { op: "A", value: "の", status: 0 },
          { op: "B", value: "に", status: 0 },
          { op: "C", value: "は", status: 0 },
          { op: "D", value: "では", status: 0 },
        ],
        correctAns: ["A",]
      },
      {
        question: "ーあなたは  中村さんですか。\n－はい、（）。",
        options: [
          { op: "A", value: "わたしは  村上です", status: 0 },
          { op: "B", value: "あなたは  村上です", status: 0 },
          { op: "C", value: "わたしは  中村です", status: 0 },
          { op: "D", value: "あなたは  中村です", status: 0 },
        ],
        correctAns: ["C",]
      },
      {
        question: "ーはじめまして、李です、（　）。\n ーはじめまして。",
        options: [
          { op: "A", value: "こちらこそ", status: 0 },
          { op: "B", value: "わかりません", status: 0 },
          { op: "C", value: "そうです", status: 0 },
          { op: "D", value: "よろしくおねがいします", status: 0 },
        ],
        correctAns: ["D",]
      },
      {
        question: "ーどうぞよろしく。\n－（）、よろしく  おねがいします。",
        options: [
          { op: "A", value: "わかりません", status: 0 },
          { op: "B", value: "こちらこそ", status: 0 },
          { op: "C", value: "そうです", status: 0 },
          { op: "D", value: "すみません", status: 0 },
        ],
        correctAns: ["B",]
      },
      {
        question: "（　）、すみません。",
        options: [
          { op: "A", value: "あっ", status: 0 },
          { op: "B", value: "はっ", status: 0 },
          { op: "C", value: "の", status: 0 },
          { op: "D", value: "えっ", status: 0 },
        ],
        correctAns: ["A",]
      },
    ],
  },

  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData == e.target.dataset.current) {
      return 0;
    } 
    else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  //单词选中事件
  wordChosen: function(e) {
    const that = this;
    var i = e.target.dataset.index;
    if (app.globalData.chosenWord.indexOf(that.data.words[i]) == -1) 
    {
      that.data.words[i].status = 1;
      app.globalData.chosenWord.push(that.data.words[i]);
      console.log(app.globalData.chosenWord);
    }
    else 
    {
      app.globalData.chosenWord.splice(app.globalData.chosenWord.indexOf(that.data.words[i]), 1);
      that.data.words[i].status = 0;
      console.log(app.globalData.chosenWord);
    }
    if (app.globalData.chosenWord.length > 0) that.data.state = 1;
    else if (app.globalData.chosenWord.length == 0) that.data.state = 0;
    that.setData({
      words: that.data.words,
      state: that.data.state
    })
  },

  wordAllChosen: function(e) {
    const that = this;
    for(var i = 0; i < that.data.words.length; i++) {
      if (app.globalData.chosenWord.indexOf(that.data.words[i]) == -1) 
      {
        that.data.words[i].status = 1;
        app.globalData.chosenWord.push(that.data.words[i]);
        console.log(app.globalData.chosenWord);
      }
    }
    that.setData({
      words: that.data.words,
      state: 1
    })
  },

  wordUnChosen: function (e) {
    const that = this;
    for (var i = 0; i < that.data.words.length; i++) {
      if (app.globalData.chosenWord.indexOf(that.data.words[i]) == -1) {
        that.data.words[i].status = 1;
        app.globalData.chosenWord.push(that.data.words[i]);
        console.log(app.globalData.chosenWord);
      }
      else {
        app.globalData.chosenWord.splice(app.globalData.chosenWord.indexOf(that.data.words[i]), 1);
        that.data.words[i].status = 0;
        console.log(app.globalData.chosenWord);
      }
      if (app.globalData.chosenWord.length > 0) that.data.state = 1;
      else if (app.globalData.chosenWord.length == 0) that.data.state = 0;
    }
    that.setData({
      words: that.data.words,
      state: that.data.state
    })
  },

  wordInput: function(e) {
    wx.navigateTo({
      url: '../S1/word/recog',
    })
  },

  testBegin: function()
  {
    wx.navigateTo({
      url: '../S1/exercise/recog',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //进入页面清空单词及练习数组，防止其他页面的数据影响到本页面
    app.globalData.chosenWord = [];
    app.globalData.wrongWord = [];
    app.globalData.chosenExercise = [];
    app.globalData.wrongExercise = [];
    app.globalData.chosenExerciseNumber = 0;
    app.globalData.chosenWordNumber = 0;
    app.globalData.wordNumber = this.data.words.length;
    console.log("pageheight：", this.data.height);
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
    // if (getCurrentPages().length >= 1) {
    //   wx.navigateBack({
    //     delta: 1
    //   })
    // }
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