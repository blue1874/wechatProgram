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
    state: false,
    section: '',
    wordSections: [],
    exerciseSections: [],
    foldState: [],
    wordTitle: '',
    exerciseTitle: '',
  },

  //获取当前滑块的index
  bindchange: function(e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },

  //控制section是否折叠
  fold: function(e) {
    const that = this;
    var i = e.target.dataset.index;
    console.log("index", i)
    that.data.foldState[i] = that.data.foldState[i] ? false : true;
    that.setData({
      foldState: that.data.foldState,
    })
  },

  //点击切换，滑块index赋值
  checkCurrent: function(e) {
    const that = this;
    if (that.data.currentData == e.target.dataset.current) {
      return 0;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  //单词选中事件
  wordChosen: function(e) {
    const that = this;
    var i = e.target.dataset.index;
    that.data.chosenWord[i] = that.data.chosenWord[i] == false ? true : false;
    console.log("chosen word change to: ", that.data.chosenWord);
    that.data.state = that.data.chosenWord.length > false ? true : false;
    that.setData({
      chosenWord: that.data.chosenWord,
      state: that.data.state
    })
  },

  //按section分组选择
  partedChosen: function(e) {
    const that = this;
    console.log(e)
    var haveUnchosen = false;
    var departedIndexArrays = e.target.dataset.departedindexarrays;
    for (var i = 0; i < departedIndexArrays.length; i++)
      if (!that.data.chosenWord[departedIndexArrays[i]]) haveUnchosen = true;
    if (haveUnchosen)
      for (var i = 0; i < departedIndexArrays.length; i++) that.data.chosenWord[departedIndexArrays[i]] = true;
    else
      for (var i = 0; i < departedIndexArrays.length; i++) that.data.chosenWord[departedIndexArrays[i]] = false;
    that.setData({
      chosenWord: that.data.chosenWord,
      state: true
    })
  },

  wordAllChosen: function(e) {
    const that = this;
    var haveUnchosen = false;
    for (var i = 0; i < that.data.chosenWord.length; i++)
      if (!that.data.chosenWord[i]) haveUnchosen = true;
    if (haveUnchosen)
      for (var i = 0; i < that.data.chosenWord.length; i++) that.data.chosenWord[i] = true;
    else
      for (var i = 0; i < that.data.chosenWord.length; i++) that.data.chosenWord[i] = false;
    that.setData({
      chosenWord: that.data.chosenWord,
      state: true
    })
  },

  // wordUnChosen: function (e) {
  //   const that = this;
  //   for (var i = 0; i < that.data.chosenWord.length; i++) that.data.chosenWord[i] = that.data.chosenWord[i] == false ? true : false;
  //   that.data.state = that.data.chosenWord.length > false ? true : false;
  //   that.setData({
  //     chosenWord: that.data.chosenWord,
  //     state: that.data.state
  //   })
  // },

  //传递选中单词进入练习页面
  wordInput: function(e) {
    const that = this;
    var temp = [];
    for (var i = 0; i < that.data.words.length; i++)
      if (that.data.chosenWord[i] == true) temp.push(that.data.words[i]);
    console.log("temp: ", temp)
    wx.navigateTo({
      url: '../word/recog?chosenWord=' + JSON.stringify(temp) + '&section=' + that.data.section,
    })
  },

  navigateToExercises: function(e) {
    const that = this;
    //console.log("e ", e)
    //绝了，wxml传递数据参数名称自动变小写...
    //console.log("chosenExercises ", e.target.dataset.chosenexercises)
    var exerciseTitle = e.target.dataset.exercisetitle;
    var chosenExercises = e.target.dataset.chosenexercises;
    wx.navigateTo({
      url: '../exercise/recog?exercises=' + JSON.stringify(chosenExercises) + '&section=' + that.data.section + '&exerciseTitle=' + exerciseTitle,
    })
  },
  // testBegin: function(){
  //   const that = this;
  //   wx.navigateTo({
  //     url: '../exercise/recog?exercises=' + JSON.stringify(that.data.exercises) + '&section=' + that.data.section,
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    //var unit = options.unit;
    //切记保证section类型为数字
    var section = parseFloat(options.section);
    console.log("section: ", section, " section type: ", typeof(section));
    that.setData({
      section: section,
    })
    //调用微信小程序云开发API返回数据
    //查询word数组
    wx.cloud.callFunction({
      name: 'inquire',
      data: {
        type: "word",
        section: section,
      },
      success(res) {
        console.log("inquire return words data: ", res.result.data);
        for (var i = 0; i < res.result.data.length; i++) that.data.chosenWord.push(false);
        that.setData({
          words: res.result.data,
          chosenWord: that.data.chosenWord,
        })
      },
      fail(res) {
        console.error('failed at calling cloud function inqurire')
      }
    })
    //查询exercises数组
    wx.cloud.callFunction({
      name: 'inquire',
      data: {
        type: "exercises",
        section: section,
      },
      success(res) {
        console.log("inquire return exercises data: ", res.result.data);
        that.setData({
          exercises: res.result.data,
        })
      },
      fail(res) {
        console.error('failed at calling cloud function inqurire')
      }
    })
    //查询section数组
    wx.cloud.callFunction({
      name: 'inquire',
      data: {
        type: "sections",
        section: section,
      },
      success(res) {
        console.log("inquire return sections data: ", res.result.data);
        var sections = res.result.data;
        var wordSections = that.data.wordSections, exerciseSections = that.data.exerciseSections;
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].wordTitle != "") wordSections.push(sections[i]);
          if (sections[i].exerciseTitle != "") exerciseSections.push(sections[i]);
        }
        for (var i = 0; i < wordSections.length; i++) that.data.foldState.push(false);
        that.setData({
          wordSections: wordSections,
          exerciseSections: exerciseSections,
          foldState: that.data.foldState,
        })
      },
      fail(res) {
        console.error('failed at calling cloud function inqurire')
      }
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
    // if (getCurrentPages().length >= 1) {
    //   wx.navigateBack({
    //     delta: 1
    //   })
    // }
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