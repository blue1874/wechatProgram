// pages/context/theFirstUnit/theFirstUnit.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    words: [],
    exercises: [],
    wordSections: [],
    exerciseSections: [],
    partedWords: [],
    partedExercises: [],
    currentData: 0,
    chosenWord: [],
    state: false,
    section: '',
    foldState: [],
    checkboxItems: [],
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

  //单词选中事件 已弃用
  // wordChosen: function(e) {
  //   const that = this;
  //   var i = e.target.dataset.index;
  //   that.data.chosenWord[i] = that.data.chosenWord[i] == false ? true : false;
  //   console.log("chosen word change to: ", that.data.chosenWord);
  //   that.data.state = that.data.chosenWord.length > false ? true : false;
  //   that.setData({
  //     chosenWord: that.data.chosenWord,
  //     state: that.data.state
  //   })
  // },

  //按section分组选择
  checkboxChange: function(e) {
    const that = this;
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.wordSections,
      values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (i == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }
    for (var i = 0; i < checkboxItems.length; i++) {
      that.partedChosen(i, checkboxItems[i].checked);
    }
    this.setData({
      wordSections: checkboxItems,
      state: that.checkIfChosen(),
    });
  },
  partedChosen: function(index, type) {
    const that = this;
    console.log("partedChosen array index: ", index);
    // var haveUnchosen = false;
    var departedArrayIndex = index;
    var startIndex = 0,
      endIndex = 0;
    for (var i = 0; i < departedArrayIndex; i++) startIndex += that.data.partedWords[i].length;
    endIndex = startIndex + that.data.partedWords[departedArrayIndex].length;
    for (var i = startIndex; i < endIndex; i++) that.data.chosenWord[i] = type;
    that.setData({
      chosenWord: that.data.chosenWord,
      state: that.checkIfChosen(),
    })
  },

  checkIfChosen: function() {
    const that = this;
    var haveUnchosen = false;
    for (var i = 0; i < that.data.wordSections.length; i++)
      if (that.data.wordSections[i].checked) haveUnchosen = true;
    return haveUnchosen;
  },

  wordAllChosen: function(e) {
    const that = this;
    for (var i = 0; i < that.data.chosenWord.length; i++) that.data.chosenWord[i] = true;
    for (var i = 0; i < that.data.wordSections.length; i++) that.data.wordSections[i].checked = true;
    that.setData({
      chosenWord: that.data.chosenWord,
      wordSections: that.data.wordSections,
      state: that.checkIfChosen(),
    })
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.exerciseSections;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = i == e.detail.value;
    }

    this.setData({
      exerciseSections: radioItems
    });
  },
  //对数据按章节进行分组
  getDepartedArrays: function(arrays, section) {
    var departedArrays = [];
    //console.log("section:", section)
    for (var i = 0; i < arrays.length; i++) {
      if (arrays[i].section == section)
        departedArrays.push(arrays[i]);
    }
    //console.log("departedArrays ",departedArrays)
    return departedArrays;
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
    // var exerciseTitle = e.target.dataset.exercisetitle;
    // var chosenExercises = e.target.dataset.chosenexercises;
    var index = 0;
    for (var i = 0; i < that.data.exerciseSections.length; i++) {
      if (that.data.exerciseSections[i].checked) index = i;
      break;
    }
    wx.navigateTo({
      url: '../exercise/recog?exercises=' + JSON.stringify(that.data.partedExercises[index]) + '&section=' + that.data.section + '&exerciseTitle=' + that.data.exerciseSections[index].exerciseTitle,
    })
  },
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
    wx.showLoading({
      title: '数据加载中',
    })
    //调用微信小程序云开发API返回数据
    //查询word数组
    const promiseWords = wx.cloud.callFunction({
        name: 'inquire',
        data: {
          type: "word",
          section: section,
        },
      }).then(res => {
        console.log('返回words数据:', res.result.data);
        for (var i = 0; i < res.result.data.length; i++) that.data.chosenWord.push(false);
        that.setData({
          words: res.result.data,
          chosenWord: that.data.chosenWord,
        })
      })
      .catch(console.error)
    //查询exercises数组
    const promiseExercises = wx.cloud.callFunction({
        name: 'inquire',
        data: {
          type: "exercises",
          section: section,
        },
      }).then(res => {
        console.log('返回exercises数据:', res.result.data);
        for (var i = 0; i < res.result.data.length; i++) that.data.chosenWord.push(false);
        that.setData({
          exercises: res.result.data,
        })
      })
      .catch(console.error)
    //查询section数组
    const promiseSections = wx.cloud.callFunction({
        name: 'inquire',
        data: {
          type: "sections",
          section: section,
        },
      }).then(res => {
        console.log('返回sections数据:', res.result.data);
        var sections = res.result.data;
        var wordSections = that.data.wordSections,
          exerciseSections = that.data.exerciseSections;
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].wordTitle != "") {
            sections[i].checked = false;
            wordSections.push(sections[i]);
          }
          if (sections[i].exerciseTitle != "") {
            sections[i].checked = false;
            exerciseSections.push(sections[i]);
          }
        }
        for (var i = 0; i < wordSections.length; i++) that.data.foldState.push(false);
        that.setData({
          wordSections: wordSections,
          exerciseSections: exerciseSections,
          foldState: that.data.foldState,
        })
      })
      .catch(console.error)

    //对返回单词与习题进行分组,等待异步查询函数执行完成再执行
    Promise.all([promiseWords, promiseSections]).then(function(values) {
      var partedWords = [];
      for (var i = 0; i < that.data.wordSections.length; i++) {
        partedWords.push(that.getDepartedArrays(that.data.words, that.data.wordSections[i].section));
      }
      console.log("words aparted: ", partedWords);
      that.setData({
        partedWords: partedWords,
      })
    })
    Promise.all([promiseExercises, promiseSections]).then(function(values) {
      var partedExercises = [];
      for (var i = 0; i < that.data.exerciseSections.length; i++) {
        partedExercises.push(that.getDepartedArrays(that.data.exercises, that.data.exerciseSections[i].section));
      }
      console.log("exercises aparted: ", partedExercises);
      that.setData({
        partedExercises: partedExercises,
      })
    })
    Promise.all([promiseWords, promiseExercises, promiseSections]).then(function() {
      console.log("数据加载完成")
      wx.hideLoading();
    });
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