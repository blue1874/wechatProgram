// pages/context/theFirstUnit/theFirstUnit.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    chosenWord: [],
    state: false,
    words: [{ word: "ちゅうごくじん", property: "名", meaning: "中国人", status: false },
    { word: "にほんじん", property: "名", meaning: "日本人", status: false },
    { word: "かんこくじん", property: "名", meaning: "韩国人", status: false },
    { word: "アメリカじん", property: "名", meaning: "美国人", status: false },
    { word: "フランスじん", property: "名", meaning: "法国人", status: false },
    { word: "がくせい", property: "名", meaning: "（大）学生", status: false },
    { word: "せんせい", property: "名", meaning: "老师", status: false },
    { word: "りゅうがくせい", property: "名", meaning: "留学生", status: false },
    { word: "きょうじゅ", property: "名", meaning: "教授", status: false },
    { word: "しゃいん", property: "名", meaning: "职员", status: false },
    { word: "かいしゃいん", property: "名", meaning: "公司职员", status: false },
    { word: "てんいん", property: "名", meaning: "店员", status: false },
    { word: "けんしゅうせい", property: "名", meaning: "进修生", status: false },
    { word: "きぎょう", property: "名", meaning: "企业", status: false },
    { word: "だいがく", property: "名", meaning: "大学", status: false },
    { word: "ちち", property: "名", meaning: "（我）父亲", status: false },
    { word: "かちょう", property: "名", meaning: "科长", status: false },
    { word: "しゃちょう", property: "名", meaning: "总经理，社长", status: false },
    { word: "でむかえ", property: "名", meaning: "迎接", status: false },
    { word: "あのひと", property: "名", meaning: "那个人", status: false },
    { word: "わたし", property: "代", meaning: "我", status: false },
    { word: "あなた", property: "代", meaning: "你", status: false },
    { word: "どうも", property: "副", meaning: "非常，很", status: false },
    { word: "はい", property: "叹", meaning: "哎，是的", status: false },
    { word: "いいえ", property: "叹", meaning: "不，不是", status: false },
    { word: "あっ", property: "叹", meaning: "哎，哎呀", status: false },
    { word: "り", property: "专", meaning: "李", status: false },
    { word: "おう", property: "专", meaning: "王", status: false },
    { word: "ちょう", property: "专", meaning: "张", status: false },
    { word: "もり", property: "专", meaning: "森", status: false },
    { word: "はやし", property: "专", meaning: "林", status: false },
    { word: "おの", property: "专", meaning: "小野", status: false },
    { word: "よしだ", property: "专", meaning: "吉田", status: false },
    { word: "たなか", property: "专", meaning: "田中", status: false },
    { word: "なかむら", property: "专", meaning: "中村", status: false },
    { word: "たろう", property: "专", meaning: "太郎", status: false },
    { word: "キム", property: "专", meaning: "金", status: false },
    { word: "デュポン", property: "专", meaning: "迪蓬", status: false },
    { word: "スミス", property: "专", meaning: "史密斯", status: false },
    { word: "ジョンソン", property: "专", meaning: "约翰逊", status: false },
    { word: "ちゅうごく", property: "专", meaning: "中国人", status: false },
    { word: "こんにちは", property: "短语", meaning: "你好", status: false },
    { word: "すみません", property: "短语", meaning: "对不起，请问", status: false },
    { word: "どうぞ", property: "短语", meaning: "请", status: false },
    { word: "よろしくおねがいします", property: "短语", meaning: "请多关照", status: false },
    { word: "はじめまして", property: "短语", meaning: "初次见面", status: false },
    { word: "こちらこそ", property: "短语", meaning: "我才要，请您", status: false },
    { word: "そうです", property: "短语", meaning: "是这样", status: false },
    { word: "ちがいます", property: "短语", meaning: "不是", status: false },
    { word: "わかりません", property: "短语", meaning: "不知道", status: false },
    { word: "どうもすみません", property: "短语", meaning: "实在对不起", status: false }]
,
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
      return false;
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
      that.data.words[i].status = true;
      app.globalData.chosenWord.push(that.data.words[i]);
      console.log(app.globalData.chosenWord);
    }
    else 
    {
      app.globalData.chosenWord.splice(app.globalData.chosenWord.indexOf(that.data.words[i]), 1);
      that.data.words[i].status = false;
      console.log(app.globalData.chosenWord);
    }
    if (app.globalData.chosenWord.length > 0) that.data.state = true;
    else if (app.globalData.chosenWord.length == 0) that.data.state = false;
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
        that.data.words[i].status = true;
        app.globalData.chosenWord.push(that.data.words[i]);
        console.log(app.globalData.chosenWord);
      }
    }
    that.setData({
      words: that.data.words,
      state: true
    })
  },

  wordUnChosen: function (e) {
    const that = this;
    for (var i = 0; i < that.data.words.length; i++) {
      if (app.globalData.chosenWord.indexOf(that.data.words[i]) == -1) {
        that.data.words[i].status = true;
        app.globalData.chosenWord.push(that.data.words[i]);
        console.log(app.globalData.chosenWord);
      }
      else {
        app.globalData.chosenWord.splice(app.globalData.chosenWord.indexOf(that.data.words[i]), 1);
        that.data.words[i].status = false;
        console.log(app.globalData.chosenWord);
      }
      if (app.globalData.chosenWord.length > 0) that.data.state = true;
      else if (app.globalData.chosenWord.length == 0) that.data.state = false;
    }
    that.setData({
      words: that.data.words,
      state: that.data.state
    })
  },

  wordInput: function(e) {
    wx.redirectTo({
      url: '../S1/word/recog',
    })
  },

  testBegin: function()
  {
    wx.redirectTo({
      url: '../S1/exercise/recog',
    })
  },

  home: function() {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  
  back: function() {
    wx.redirectTo({
      url: '/pages/menu/menu',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.chosenWord = [];
    app.globalData.wrongWord = [];
    app.globalData.chosenWordNumber = 0;
    app.globalData.wordNumber = this.data.words.length;
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