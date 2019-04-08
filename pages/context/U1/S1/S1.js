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
    words:[
      { word: "ちゅごくじん", property: "名", meaning: "中国人", status: false},
      { word: "にほんじん", property: "名", meaning: "日本人", status: false},
      { word: "かんこくじん", property: "名", meaning: "韩国人", status: false},
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