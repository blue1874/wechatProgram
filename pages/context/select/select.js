// pages/context/theFirstUnit/theFirstUnit.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    words: [],
    exercises: [],
    currentData: 0,
    chosenWord: [],
    state: 0,
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
    that.data.chosenWord[i] = that.data.chosenWord[i] == 0 ? 1 : 0;
    console.log("chosen word change to: ", that.data.chosenWord);
    that.data.state = that.data.chosenWord.length > 0 ? 1 : 0;
    that.setData({
      chosenWord: that.data.chosenWord,
      state: that.data.state
    })
  },

  wordAllChosen: function(e) {
    const that = this;
    for (var i = 0; i < that.data.chosenWord.length; i++) that.data.chosenWord[i] = 1;
    that.setData({
      chosenWord: that.data.chosenWord,
      state: 1
    })
  },

  wordUnChosen: function (e) {
    const that = this;
    for (var i = 0; i < that.data.chosenWord.length; i++) that.data.chosenWord[i] = that.data.chosenWord[i] == 0 ? 1 : 0;
    that.data.state = that.data.chosenWord.length > 0 ? 1 : 0;
    that.setData({
      chosenWord: that.data.chosenWord,
      state: that.data.state
    })
  },

  //传递选中单词进入练习页面
  wordInput: function(e) {
    const that = this;
    var temp = [];
    for(var i = 0; i < that.data.words.length; i++) if(that.data.chosenWord[i] == 1) temp.push(that.data.words[i]);
    console.log("temp: ", temp)
    wx.navigateTo({
      url: '../word/recog?chosenWord=' + JSON.stringify(temp),
    })
  },

  testBegin: function()
  {
    const that = this;
    wx.navigateTo({
      url: '../exercise/recog?exercises=' + JSON.stringify(that.data.exercises),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    var unit = options.unit;
    var section = options.section;
    //初始化页面数据
    var network = require("../../../utils/network.js")
    network.request({
      url: 'https://www.ykkskl.top/dataInterface/data.jsp',
      data:{
        section: section,
      },
      header:{
        'content-type': 'application/json'
      },
      //request函数为异步执行，为保证同步执行，需将操作放入success回调函数
      success(res) {
        //初始化时所有选项均为未选中状态
        for (var i = 0; i < res.data.words.length; i++)  that.data.chosenWord.push(0); 
        that.setData({
          words: res.data.words,
          exercises: res.data.exercises,
          chosenWord: that.data.chosenWord
        })
        console.log("返回words组",that.data.words);
        console.log("返回exercises组",that.data.exercises);
      }
    });
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